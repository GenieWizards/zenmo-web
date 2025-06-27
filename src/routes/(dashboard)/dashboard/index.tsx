import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      {/* Add dashboard widgets, charts, summaries, etc. */}
    </div>
  );
}
