"use client";

import React, { useMemo } from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { getTimelineIcon, timelineGroupsData } from "@/modules/About/utils/constants";

const AboutTimeline = () => {
  const timelineData: TimelineEntry[] = useMemo(() => {
    return timelineGroupsData.map((group) => ({
      title: group.year,
      content: (
        <div className="flex flex-col gap-y-6">
          {group.items.map((item, idx) => {
            const hasSkills = Boolean(item.skills && item.skills.length > 0);
            return (
              <Card key={idx} className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
                  <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    {getTimelineIcon(item.iconType)}
                    {item.title}
                  </h4>
                  <Badge size="sm" variant="accent">
                    {item.period}
                  </Badge>
                </div>

                {(item.organization || item.location || item.highlight) && (
                  <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2 relative z-10">
                    {item.organization && (
                      <span className="font-semibold text-foreground">
                        {item.organization}
                      </span>
                    )}
                    {item.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin className="w-3.5 h-3.5 text-accent" />
                          {item.location}
                        </span>
                      </>
                    )}
                    {item.highlight && (
                      <>
                        {item.organization && <span>•</span>}
                        <span
                          className={
                            item.highlightVariant === "accent"
                              ? "text-sm sm:text-sm text-accent font-bold bg-accent/15 border border-accent/40 px-2 py-0.5 rounded"
                              : "text-sm sm:text-sm text-emerald-500 font-bold bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded"
                          }
                        >
                          {item.highlight}
                        </span>
                      </>
                    )}
                  </div>
                )}

                <p
                  className={`text-sm text-justify text-muted-foreground leading-relaxed relative z-10 ${
                    hasSkills ? "mb-4" : ""
                  }`}
                >
                  {item.description}
                </p>

                {hasSkills && (
                  <div className="flex flex-wrap gap-2 text-sm relative z-10">
                    {item.skills!.map((tech) => (
                      <Badge key={tech} size="sm" variant="muted" rounded="md">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      ),
    }));
  }, []);

  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
};

export default AboutTimeline;
