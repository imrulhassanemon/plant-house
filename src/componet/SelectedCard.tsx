import { Trash2 } from "lucide-react";

interface SelectedCardProps {
  name: string;
  position: string;
  image?: string;
  onDelete?: () => void;
}

const SelectedCard = ({
  name,
  position,
  image,
  onDelete,
}: SelectedCardProps) => {
  return (
    <div className="w-full mt-10 max-w-5/6 mx-auto rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Image */}
          <div className="h-12 w-12 overflow-hidden rounded-xl bg-gray-200">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-300" />
            )}
          </div>

          {/* Selected Info */}
          <div>
            <h3 className="text-base font-semibold text-gray-800">{name}</h3>

            <p className="mt-1 text-xs text-gray-500">{position}</p>
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={onDelete}
          className="rounded-lg p-2 text-red-500 transition hover:bg-red-50 hover:text-red-600"
          aria-label={`Delete ${name}`}
        >
          <Trash2 size={17} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
