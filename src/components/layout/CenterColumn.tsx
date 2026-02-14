import { useRef, useCallback } from 'react';
import ChartComposer from '../feed/ChartComposer';
import ChartCard from '../feed/ChartCard';
import ThumbTok from '../feed/ThumbTok';
import { useChartStore } from '@/lib/stores/chartStore';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import Spinner from '../common/Spinner';

export default function CenterColumn() {
  const { charts, loading, hasMore, loadMore } = useChartStore();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const loadMoreCharts = useCallback(() => {
    if (!loading && hasMore) {
      loadMore();
    }
  }, [loading, hasMore, loadMore]);

  useInfiniteScroll(loadMoreRef, loadMoreCharts);

  return (
    <div className="flex-1 lg:ml-64 lg:mr-80 min-h-screen overflow-y-auto">
      <div className="max-w-2xl mx-auto py-4 px-4">
        {/* Top Live Streams Section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">Top Live Streams</h2>
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {/* Example live stream cards */}
            <div className="flex-shrink-0 w-48 bg-card-bg rounded-lg p-2">
              <div className="h-24 bg-gray-700 rounded mb-2"></div>
              <p className="font-semibold">ALL-STAR WORKOUT</p>
              <p className="text-xs text-text-secondary">Stay Fit. MAHAcize!</p>
              <span className="text-xs text-primary">🔴 LIVE · 2.3k</span>
            </div>
            <div className="flex-shrink-0 w-48 bg-card-bg rounded-lg p-2">
              <div className="h-24 bg-gray-700 rounded mb-2"></div>
              <p className="font-semibold">TURNING POINT TONIGHT</p>
              <p className="text-xs text-text-secondary">Real America's Voice</p>
              <span className="text-xs text-primary">🔴 LIVE · 1.2k</span>
            </div>
            <div className="flex-shrink-0 w-48 bg-card-bg rounded-lg p-2">
              <div className="h-24 bg-gray-700 rounded mb-2"></div>
              <p className="font-semibold">Infowars Network Feed</p>
              <span className="text-xs text-primary">🔴 LIVE · 5.6k</span>
            </div>
          </div>
        </section>

        {/* Recommended Hosts */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Recommended Hosts</h2>
            <Link href="/recommended" className="text-sm text-primary">Show more</Link>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {['infowars', 'warroom', 'realamericasvoice1', 'rsbnetwork'].map(handle => (
              <div key={handle} className="flex-shrink-0 flex items-center space-x-2 bg-card-bg p-2 rounded-lg">
                <Avatar user={{ handle }} size="sm" />
                <div>
                  <p className="font-semibold">@{handle}</p>
                  <button className="text-xs bg-primary text-white px-2 py-1 rounded">Follow</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Post Composer */}
        <ChartComposer />

        {/* ThumbTok Short Clips */}
        <ThumbTok />

        {/* Charts Feed */}
        <div className="space-y-4">
          {charts.map(chart => (
            <ChartCard key={chart.id} chart={chart} />
          ))}
        </div>

        {/* Infinite scroll trigger */}
        <div ref={loadMoreRef} className="py-4 flex justify-center">
          {loading && <Spinner />}
        </div>
      </div>
    </div>
  );
}