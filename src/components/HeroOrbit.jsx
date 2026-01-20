

 const HeroOrbit = ({ children, size, rotation }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-red-500">
      <div
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="inline-flex"
          style={{
            transform: `rotate(${-rotation}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default HeroOrbit;