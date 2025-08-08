function BgGradient() {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div
        className="absolute bottom-auto left-0 right-auto top-0 h-[500px] 
            w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full 
            bg-[rgba(118,246,235,0.5)] opacity-850 blur-[80px]"
      ></div>
    </div>
  );
}

export default BgGradient;
