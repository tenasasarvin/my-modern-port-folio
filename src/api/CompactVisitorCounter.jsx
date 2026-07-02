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
        const hasVisited = sessionStorage.getItem("portfolio_visited");

        // 1. Record new visit
        if (!hasVisited) {
          const { error: insertError } = await supabase
            .from("visitors")
            .insert([{}]); // Works because 'id' and 'visited_at' auto-generate

          if (insertError) {
            console.error("Supabase Insert Error:", insertError.message);
          } else {
            sessionStorage.setItem("portfolio_visited", "true");
          }
        }

        // 2. Fetch Total Views
        const { count: totalViews, error: totalError } = await supabase
          .from("visitors")
          .select("*", { count: "exact", head: true });

        if (totalError) throw totalError;

        // 3. Fetch Today's Views
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const { count: todayViews, error: todayError } = await supabase
          .from("visitors")
          .select("*", { count: "exact", head: true })
          .gte("visited_at", startOfToday.toISOString());

        if (todayError) throw todayError;

        // 4. Update UI (Removed the || 1 fallbacks so you see the real numbers)
        setStats({
          today: todayViews || 0,
          total: totalViews ? totalViews.toLocaleString() : "0",
          trend: "12%",
        });
      } catch (error) {
        console.error("Failed to fetch visitor stats:", error.message || error);
      } finally {
        setLoading(false);
      }
    };

    trackAndFetchViews();
  }, []);

  if (loading) {
    return (
      <div className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-[#6B7280] dark:text-[#A1A1AA] animate-pulse">
        Initializing metrics...
      </div>
    );
  }

  return (
    <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-[#6B7280] dark:text-[#A1A1AA] select-none animate-fade-in">
      {/* Total Views */}
      <div
        className="flex items-center gap-2 group cursor-default"
        title="Total Views"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-[#6B7280] dark:text-[#A1A1AA] group-hover:text-green-500 transition-colors duration-300"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span className="flex items-baseline gap-1.5">
          <strong className="text-[#1F2937] dark:text-white">
            {stats.total}
          </strong>
          <span>Views</span>
        </span>
      </div>

      {/* Architectural Separator */}
      <span className="text-[#E5E7EB] dark:text-[#333] font-light">/</span>

      {/* Today's Views */}
      <div
        className="flex items-center gap-2 cursor-default group"
        title="Today's Views"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 bg-green-500"></span>
        </span>
        <span className="flex items-baseline gap-1.5">
          <strong className="text-[#1F2937] dark:text-white group-hover:text-green-500 transition-colors duration-300">
            {stats.today}
          </strong>
          <span>Today</span>
        </span>
      </div>

      {/* Architectural Separator */}
      <span className="hidden sm:inline text-[#E5E7EB] dark:text-[#333] font-light">
        /
      </span>

      {/* Trend Badge */}
      <div
        className="hidden sm:flex items-center gap-1.5 text-green-500 border border-green-500/30 bg-green-500/5 px-2 py-1 cursor-default transition-colors hover:border-green-500"
        title="Weekly Growth Trend"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="w-3 h-3"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
        <span>+{stats.trend}</span>
      </div>
    </div>
  );
};

export default CompactVisitorCounter;
