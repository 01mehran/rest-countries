import { ThreeDot } from 'react-loading-indicators';

function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 transform">
      <ThreeDot variant="pulsate" color="#32cd32" size="medium" />
    </div>
  );
}

export default Loading;
