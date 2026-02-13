import codes from "@/data/codes.json";

export interface Code {
  code: string;
  reward: string;
  active: boolean;
  createdAt: string;
}

const isNew = (date: string) => {
  const created = new Date(date).getTime();
  const now = Date.now();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  return now - created < sevenDays;
};

export function getCodes() {
  const active = codes.filter(c => c.active);
  const expired = codes.filter(c => !c.active);

  const activeWithMeta = active.map(c => ({
    ...c,
    isNew: isNew(c.createdAt)
  }));

  return {
    active: activeWithMeta,
    expired,
    totalActive: active.length
  };
}
