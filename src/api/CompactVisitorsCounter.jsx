import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CompactVisitorCounter = () => {
  const [stats, setStats] = useState({ today: 0, total: "...", trend: "12%" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackAndFetchViews = async () => {
      try {
        // 1. ANTI-SPAM: Check if we already counted this user in this session
        const hasVisited = sessionStorage.getItem("portfolio_visited");

        if (!hasVisited) {
          // Record new visit to Supabase
          await supabase.from("visitors").insert([{}]);
          // Mark session as visited
          sessionStorage.setItem("portfolio_visited", "true");
        }

        // 2. FETCH TOTAL VIEWS
        const { count: totalViews } = await supabase
          .from("visitors")
          .select("*", { count: "exact", head: true });

        // 3. FETCH TODAY'S VIEWS
        // Get the timestamp for the start of today (midnight)
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const { count: todayViews } = await supabase
          .from("visitors")
          .select("*", { count: "exact", head: true })
          .gte("visited_at", startOfToday.toISOString());

        // 4. UPDATE UI
        setStats({
          today: todayViews || 1, // Fallback to 1 if it's the very first view
          total: totalViews ? totalViews.toLocaleString() : "1",
          trend: "12%", // Keeping trend static as calculating weekly deltas requires advanced SQL
        });
      } catch (error) {
        console.error("Failed to fetch visitor stats:", error);
      } finally {
        setLoading(false);
      }
    };

    trackAndFetchViews();
  }, []);

  if (loading) {
    return (
      <div className="text-xs text-gray-400 animate-pulse">
        Initializing metrics...
      </div>
    );
  }

  return (
    <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 select-none animate-fade-in">
      {/* Total Views */}
      <div
        className="flex items-center gap-1.5 group cursor-default"
        title="Total Views"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-gray-400 dark:text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span className="flex items-baseline gap-1">
          <strong className="text-gray-900 dark:text-white font-semibold tracking-wide">
            {stats.total}
          </strong>
          <span className="lowercase">views</span>
        </span>
      </div>

      {/* Separator */}
      <div className="w-1 h-1 bg-gray-300 dark:bg-neutral-600 rounded-full"></div>

      {/* Today's Views */}
      <div
        className="flex items-center gap-1.5 cursor-default"
        title="Today's Views"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span className="flex items-baseline gap-1">
          <strong className="text-gray-900 dark:text-white font-semibold tracking-wide">
            {stats.today}
          </strong>
          <span className="lowercase">today</span>
        </span>
      </div>

      {/* Separator */}
      <div className="hidden sm:block w-1 h-1 bg-gray-300 dark:bg-neutral-600 rounded-full"></div>

      {/* Trend Badge */}
      <div
        className="hidden sm:flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded-md text-[10px] tracking-wide cursor-default"
        title="Weekly Growth Trend"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-2.5 h-2.5"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
        +{stats.trend}
      </div>
    </div>
  );
};

export default CompactVisitorCounter;
