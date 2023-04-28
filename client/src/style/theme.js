const calcRem = size => `${size / 16}rem`;

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const fontSizes = {
  xxs: calcRem(4),
  xs: calcRem(8),
  s: calcRem(12),
  content: calcRem(14),
  base: calcRem(16),
  l: calcRem(18),
  zl: calcRem(20),
  xl: calcRem(24),
  title: calcRem(28),
  carousel: calcRem(32),
};

const paddings = {
  xxs: calcRem(4),
  xs: calcRem(8),
  s: calcRem(12),
  m: calcRem(16),
  l: calcRem(20),
  xl: calcRem(24),
  xxl: calcRem(28),
  xxxl: calcRem(32),
};

const margins = {
  xxs: calcRem(4),
  xs: calcRem(8),
  s: calcRem(12),
  m: calcRem(16),
  l: calcRem(20),
  xl: calcRem(24),
  xxl: calcRem(28),
  xxxl: calcRem(32),
};

const imgSizes = {
  xs: calcRem(48),
  s: calcRem(64),
  m: calcRem(128),
  l: calcRem(160),
  xl: calcRem(240),
  xxl: calcRem(400),
  xxxl: calcRem(640),
  xxxxl: calcRem(800),
};

const sizes = {
  w_xxs: calcRem(16),
  w_xs: calcRem(32),
  w_s: calcRem(48),
  w_m: calcRem(64),
  w_l: calcRem(80),
  w_xl: calcRem(128),
  w_xxl: calcRem(256),
  w_xxxl: calcRem(320),
  w_xxxxl: calcRem(400),
  w_xxxxxl: calcRem(640),
  h_xxs: calcRem(16),
  h_zzx: calcRem(20),
  h_xs: calcRem(24),
  h_s: calcRem(32),
  h_m: calcRem(40),
  h_l: calcRem(48),
  h_zl: calcRem(64),
  h_xl: calcRem(76),
  h_xxl: calcRem(128),
  h_zzl: calcRem(256),
  h_xxxl: calcRem(238),
  h_xxxxl: calcRem(256),
  h_xxxxxl: calcRem(448),
};

const imgStyles = {
  user: '1 / 1',
  commission: '4 / 3',
};

const colors = {
  black: '#000',
  white: '#fff',
  gray_1: '#cecece',
  gray_2: '#ececec',
  gray_3: '#999999',
  gray_4: '#666666',
  tea_1: '#ddba9d',
  tea_2: '#ce8e5b',
  tea_3: '#f5e8dd',
  transparent: 'transparent',
};

const radiuses = {
  circle: '50%',
  half: '10rem',
  base: '0.25rem',
  l: '1rem',
};

const buttons = {
  header: {
    backgroundColor: 'transparent',
    border: 'none',
    size: fontSizes.base,
  },
  write: {
    backgroundColor: colors.tea_1,
    border: 'none',
    size: fontSizes.base,
    color: colors.white,
    padding: '0.5rem 1.5rem',
    borderRadius: radiuses.base,
  },
  edit: {
    backgroundColor: colors.gray_2,
    border: 'none',
    size: fontSizes.base,
    padding: '0.5rem 1.5rem',
    borderRadius: radiuses.base,
  },
  smallEdit: {
    backgroundColor: colors.white,
    size: fontSizes.base,
    border: `1px solid ${colors.gray_1}`,
    padding: '0.25rem 0.75rem',
    borderRadius: radiuses.half,
  },
  long: {
    backgroundColor: colors.tea_1,
    border: 'none',
    size: fontSizes.base,
    color: colors.white,
    padding: '1rem 0',
    borderRadius: radiuses.base,
    width: '100%',
  },
};

const typos = {
  title_1: {
    size: fontSizes.title,
    bold: 'bold',
    color: colors.tea_2,
    space: 'nowrap',
  },
  title_2: {
    size: fontSizes.title,
    bold: 'bold',
    height: sizes.h_s,
    line: 2,
  },
  title_3: {
    size: fontSizes.xl,
    bold: 'bold',
    height: sizes.h_xs,
    lineHeight: fontSizes.xl,
  },
  title_4: {
    size: fontSizes.zl,
    bold: 'bold',
  },
  carousel: {
    size: fontSizes.carousel,
    bold: 'bold',
    color: colors.tea_2,
    space: 'nowrap',
    textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
  },
  commissions: {
    size: fontSizes.base,
    bold: 'bold',
    height: sizes.h_xs,
  },
  commissionSub: {
    size: fontSizes.base,
    height: sizes.h_xxxxxl,
    lineHeight: fontSizes.xl,
  },
  commissionMain: {
    size: fontSizes.base,
    lineHeight: fontSizes.xl,
  },
  name: {
    size: fontSizes.l,
    bold: 'bold',
    color: colors.tea_2,
  },
  name_2: {
    size: fontSizes.base,
    bold: 'bold',
    color: colors.tea_2,
  },
  base: {
    size: fontSizes.base,
  },
  base_2: {
    size: fontSizes.content,
    bold: 'bold',
    color: colors.gray_3,
  },
  date: {
    size: fontSizes.s,
    color: colors.gray_3,
  },
};

const theme = {
  fontSizes,
  paddings,
  margins,
  imgSizes,
  imgStyles,
  colors,
  radiuses,
  sizes,
  device,
  buttons,
  typos,
};

export default theme;
