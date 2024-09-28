import { algorithmDescription } from "../algorithms/algorithmsDescription";

export default function Modal({ open, onClose, selectedAlgorithm, children }) {
  function getAlgorithmDescription(name) {
    // Check if the name is valid and not undefined or null
    if (!name) {
      return "No algorithm selected.";
    }

    // Find the algorithm by name (case-insensitive)
    const algorithm = algorithmDescription.find(
      (alg) => alg.name.toLowerCase() === name.toLowerCase()
    );

    // Return the description if found, otherwise return a not found message
    return algorithm ? algorithm.description : "Algorithm not found.";
  }

  const description = getAlgorithmDescription(selectedAlgorithm);

  return (
    // backdrop
    <div
      className={`
            fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visible z-10 bg-black/50" : "invisible"}
          `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
               rounded w-1/2 h-fit bg-white p-10 transition-all
              ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}
      >
        {children}
        <p className="bg-gray-200 p-3">{description}</p>
      </div>
    </div>
  );
}
