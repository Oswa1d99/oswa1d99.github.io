export function estimateReadingTime(content: string, lang: 'ko' | 'en' = 'ko'): number {
  const koreanCharRate = 500;
  const englishWordRate = 200;

  const koreanChars = (content.match(/[가-힣]/g) || []).length;
  const englishWords = content.replace(/[가-힣]/g, ' ').split(/\s+/).filter(w => w.length > 0).length;

  const koreanMinutes = koreanChars / koreanCharRate;
  const englishMinutes = englishWords / englishWordRate;

  const total = Math.ceil(koreanMinutes + englishMinutes);
  return Math.max(1, total);
}