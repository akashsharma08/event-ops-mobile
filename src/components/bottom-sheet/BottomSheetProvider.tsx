import React, { createContext, useCallback, useMemo, useState } from 'react';

type BottomSheetState = null | {
  type: string;
  payload?: any;
};

type BottomSheetContextType = {
  sheet: BottomSheetState;
  openSheet: (type: string, payload?: any) => void;
  closeSheet: () => void;
};

export const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

export const BottomSheetProvider = ({ children }: { children: React.ReactNode }) => {
  const [sheet, setSheet] = useState<BottomSheetState>(null);

  const openSheet = useCallback((type: string, payload?: any) => {
    setSheet({ type, payload });
  }, []);

  const closeSheet = useCallback(() => {
    setSheet(null);
  }, []);

  const value = useMemo(
    () => ({ sheet, openSheet, closeSheet }),
    [sheet, openSheet, closeSheet],
  );

  return <BottomSheetContext.Provider value={value}>{children}</BottomSheetContext.Provider>;
};
