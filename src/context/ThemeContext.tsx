import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type ThemeId = 'space' | 'professional' | 'forest' | 'ocean';

export interface ThemeMeta {
  id: ThemeId;
  name: string;
  emoji: string;
  tagline: string;
  scrollCompanion: string;
  isLight: boolean;
  previewPrimary: string;
  previewSecondary: string;
  previewAccent: string;
  previewAccentSecondary: string;
}

export const THEME_LIST: ThemeMeta[] = [
  {
    id: 'space',
    name: 'Space',
    emoji: '🌌',
    tagline: 'Deep cosmos & violet glow',
    scrollCompanion: 'Rocket',
    isLight: false,
    previewPrimary: '#050816',
    previewSecondary: '#0B1224',
    previewAccent: '#8B5CF6',
    previewAccentSecondary: '#38BDF8',
  },
  {
    id: 'professional',
    name: 'Professional',
    emoji: '🤍',
    tagline: 'Clean white & crisp blue',
    scrollCompanion: 'Paper Plane',
    isLight: true,
    previewPrimary: '#FFFFFF',
    previewSecondary: '#F5F7FA',
    previewAccent: '#2563EB',
    previewAccentSecondary: '#0F172A',
  },
  {
    id: 'forest',
    name: 'Forest',
    emoji: '🌳',
    tagline: 'Living canopy & sunlit greens',
    scrollCompanion: 'Monkey',
    isLight: false,
    previewPrimary: '#071A12',
    previewSecondary: '#10291D',
    previewAccent: '#22C55E',
    previewAccentSecondary: '#A3E635',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    emoji: '🌊',
    tagline: 'Abyssal blue & cyan waves',
    scrollCompanion: 'Whale',
    isLight: false,
    previewPrimary: '#061B2A',
    previewSecondary: '#0B2C40',
    previewAccent: '#06B6D4',
    previewAccentSecondary: '#3B82F6',
  },
];

const THEME_STORAGE_KEY = 'anant_portfolio_theme';

function isValidTheme(value: unknown): value is ThemeId {
  return (
    value === 'space' ||
    value === 'professional' ||
    value === 'forest' ||
    value === 'ocean'
  );
}

interface ThemeContextValue {
  theme: ThemeId;
  themeMeta: ThemeMeta;
  setTheme: (nextTheme: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    try {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (isValidTheme(saved)) {
        return saved;
      }
    } catch {
      // Ignore storage access failures
    }
    return 'space';
  });

  const setTheme = useCallback((nextTheme: ThemeId) => {
    setThemeState(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage write failures
    }
  }, []);

  const themeMeta = useMemo(
    () => THEME_LIST.find((item) => item.id === theme) ?? THEME_LIST[0],
    [theme]
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', themeMeta.previewPrimary);
    }
  }, [theme, themeMeta]);

  const value = useMemo(
    () => ({
      theme,
      themeMeta,
      setTheme,
    }),
    [theme, themeMeta, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }
  return context;
}
