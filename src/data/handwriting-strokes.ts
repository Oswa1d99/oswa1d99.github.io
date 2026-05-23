export interface HandwritingStroke {
  character: string;
  glyphIndex: number;
  pathData: string;
  penStrokeWidth: number;
}

export const HANDWRITING_STROKES: HandwritingStroke[] = [
  {
    character: 'J',
    glyphIndex: 0,
    pathData: 'M18 -41 C7 -42 4 -50 13 -55 C25 -61 42 -61 56 -75 C50 -64 48 -52 48 -39 C48 -25 50 -7 44 12 C40 26 30 32 18 29 C8 26 8 14 16 4 C26 -7 43 -14 61 -17',
    penStrokeWidth: 4.8,
  },
  {
    character: 'a',
    glyphIndex: 1,
    pathData: 'M78 -18 C68 -25 58 -17 59 -7 C60 4 73 -2 75 -14 C75 -5 78 1 85 -1 C90 -3 93 -9 96 -14',
    penStrokeWidth: 4.4,
  },
  {
    character: 'y',
    glyphIndex: 2,
    pathData: 'M96 -21 C91 -8 95 1 101 -1 C108 -3 111 -16 111 -19 C109 -5 108 13 108 27 C108 43 100 48 96 39 C93 31 98 17 108 5 C116 -3 122 -10 126 -15',
    penStrokeWidth: 4.4,
  },
  {
    character: 'B',
    glyphIndex: 4,
    pathData: 'M228 -68 C215 -53 211 -35 205 -23 C196 -5 180 2 162 -1 C146 -4 146 -18 151 -31 C160 -53 184 -66 213 -68 C239 -69 249 -60 248 -50 C247 -39 233 -34 214 -33 C241 -35 253 -27 251 -15 C249 -2 230 3 207 -3',
    penStrokeWidth: 5.4,
  },
  {
    character: 'a',
    glyphIndex: 5,
    pathData: 'M280 -18 C270 -25 260 -17 261 -7 C262 4 275 -2 277 -14 C277 -5 280 1 287 -1 C292 -3 295 -9 298 -14',
    penStrokeWidth: 4.4,
  },
  {
    character: 'e',
    glyphIndex: 6,
    pathData: 'M299 -8 C306 -11 309 -17 306 -20 C301 -24 296 -18 297 -10 C298 0 307 3 316 -3 C319 -6 322 -11 323 -14',
    penStrokeWidth: 4.2,
  },
  {
    character: 'k',
    glyphIndex: 7,
    pathData: 'M324 -67 C323 -46 323 -24 323 -2',
    penStrokeWidth: 4.4,
  },
  {
    character: 'k',
    glyphIndex: 7.1,
    pathData: 'M324 -10 C331 -22 340 -25 342 -18 C344 -10 334 -7 331 -6 C335 2 348 2 358 -14',
    penStrokeWidth: 4.4,
  },
  {
    character: '.',
    glyphIndex: 8,
    pathData: 'M362 -2 C362 -2 362 -2 363 -2',
    penStrokeWidth: 5,
  },
  {
    character: 'd',
    glyphIndex: 9,
    pathData: 'M398 -63 C391 -48 389 -29 391 -16 C385 -1 374 2 374 -8 C374 -19 383 -24 386 -21 C389 -18 390 -10 393 -5 C397 2 406 -4 412 -15',
    penStrokeWidth: 4.6,
  },
  {
    character: 'e',
    glyphIndex: 10,
    pathData: 'M414 -8 C421 -11 424 -17 421 -20 C416 -24 411 -18 412 -10 C413 0 422 3 431 -3 C434 -6 437 -11 438 -14',
    penStrokeWidth: 4.2,
  },
  {
    character: 'v',
    glyphIndex: 11,
    pathData: 'M438 -22 C436 -12 440 -1 444 -1 C449 -2 453 -13 454 -22 C457 -13 463 -8 471 -14',
    penStrokeWidth: 4.4,
  },
];
