export const getAnimateOptions = (condition:boolean)=>(

condition?{
          initial: { opacity: 0, rotateX: 90},
          animate: { opacity: 1, rotateX: 0},
          exit: { opacity: 0, rotateX: 90 },
          transition:{ duration: .25}
          
          }:{}    
); 