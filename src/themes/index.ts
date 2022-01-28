export default {
  appStyle: {
    baseCls: 'relative w-screen h-screen bg-zinc-900 flex items-center justify-center overflow-hidden',
    overlayCls: 'absolute inset-0 bg-transparent',
    overlayDesignCls: 'absolute top-0 -right-32 bottom-0 -skew-x-12 w-1/3 h-full bg-amber-500',
    containerCls: 'relative w-full max-w-screen-xl h-5/6 m-auto z-10'
  },

  landingPageStyle: {
    baseCls: 'w-full h-full flex flex-row gap-4', // bg-white bg-opacity-10
    sectionCls: 'flex-1 h-full flex items-center py-20',
    leftContainerCls: 'w-full max-w-xl h-full mr-auto flex flex-col justify-center gap-4',
    rightContainerCls: 'w-full max-w-xl h-full ml-auto bg-black rounded-xl shadow-inner shadow-black overflow-hidden'
  },
}