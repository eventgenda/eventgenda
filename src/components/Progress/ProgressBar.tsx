export default function ProgressBar(width: { width: number }) {
  return (
    <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{
          width: `${width.width}%`,
        }}
      ></div>
    </div>
  );
}
