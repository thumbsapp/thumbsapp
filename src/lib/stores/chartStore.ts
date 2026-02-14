import { create } from 'zustand';
import { Chart } from '@/lib/types';
import { api } from '@/lib/services/api';

interface ChartState {
  charts: Chart[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  refreshCharts: () => Promise<void>;
  loadMore: () => Promise<void>;
  addReaction: (chartId: string, reactionType: string) => void;
  addComment: (chartId: string, comment: string) => void;
}

function interleaveArrays(arr1: any[], arr2: any[], take1: number, take2: number) {
  const result = [];
  let i = 0, j = 0;
  while (i < arr1.length || j < arr2.length) {
    for (let k = 0; k < take1 && i < arr1.length; k++) result.push(arr1[i++]);
    for (let k = 0; k < take2 && j < arr2.length; k++) result.push(arr2[j++]);
  }
  return result;
}

export const useChartStore = create<ChartState>((set, get) => ({
  charts: [],
  page: 1,
  hasMore: true,
  loading: false,

  refreshCharts: async () => {
    set({ loading: true });
    try {
      const gameCharts = await api.getCharts(1);
      const newsPosts = await api.getGettrNewsFeed();
      const merged = interleaveArrays(newsPosts, gameCharts, 2, 3);
      set({ charts: merged, page: 2, hasMore: true });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  loadMore: async () => {
    const { page, charts } = get();
    set({ loading: true });
    try {
      const newGameCharts = await api.getCharts(page);
      const newNews = await api.getGettrNewsFeed(); // in real app, paginate news too
      const merged = interleaveArrays(newNews, newGameCharts, 2, 3);
      set({ charts: [...charts, ...merged], page: page + 1, hasMore: newGameCharts.length > 0 });
    } finally {
      set({ loading: false });
    }
  },

  addReaction: (chartId, reactionType) => {
    set(state => ({
      charts: state.charts.map(chart =>
        chart.id === chartId
          ? { ...chart, reactions: { ...chart.reactions, [reactionType]: chart.reactions[reactionType] + 1 } }
          : chart
      ),
    }));
  },

  addComment: (chartId, comment) => {
    // Mock adding comment
  },
}));