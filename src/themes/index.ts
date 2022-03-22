export default {
  // App
  appStyle: {
    baseCls: 'relative w-screen h-screen bg-white flex items-center justify-center overflow-hidden',
    containerCls: 'relative w-full max-w-screen-xl h-5/6 m-auto p-8'
  },

  // Landing
  landingPageStyle: {
    baseCls: 'w-full h-full flex flex-row',
    containerCls: 'flex-1 h-full flex items-center',
    leftContentCls: 'w-full h-full pr-20 flex flex-col justify-center gap-2',
    rightContentCls: 'w-full h-full flex items-center overflow-hidden',
    greetingsCls: 'text-3xl text-gray-700 font-medium',
    authorCls: 'text-6xl text-primary font-medium',
    borderCls: 'w-20 h-1.5 mt-4 mb-2 bg-primary rounded',
    descriptionWrapperCls: 'flex flex-col gap-2 mt-2',
    descriptionCls: 'text-lg text-gray-700',
    actionWrapperCls: 'flex items-center my-5 gap-4',
  },

  // Image
  imageStyle: {
    baseCls: 'relative w-full flex items-center justify-center overflow-hidden',
    roundedCls: {
      unset: '',
      rounded: 'rounded-2xl',
      full: 'rounded-full',
    },
    borderCls: 'border border-primary-100 border-opacity-30',
    backgroundCls: {
      default: '',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      warning: 'bg-warning',
      danger: 'bg-danger',
      black: 'bg-black',
      white: 'bg-white',
      transparent: 'bg-transparent',
    },
    containerCls: 'relative w-full',
    overlayCls: 'absolute inset-0 w-full h-full flex items-center justify-center',
    imgCls: 'w-full h-full',
    fitCls: {
      cover: 'object-cover',
      contain: 'object-contain',
    }
  },

  // Button
  buttonStyle: {
    baseCls: 'cursor-pointer outline-none px-8 py-4 text-white text-md tracking-wide font-medium rounded-md transition duration-300 ease-in-out',
    colorCls: {
      primary: 'bg-primary hover:bg-primary-600',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
    }
  }
}