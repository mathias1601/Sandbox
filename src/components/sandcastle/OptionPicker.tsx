import type { ReactNode } from 'react';
import type { SandcastleOption } from './sandcastleOptions';

type OptionPickerProps<T extends string> = {
  title: string;
  options: SandcastleOption<T>[];
  selectedId: T;
  onSelect: (id: T) => void;
  renderIcon: (id: T) => ReactNode;
};

function OptionPicker<T extends string>({
  title,
  options,
  selectedId,
  onSelect,
  renderIcon,
}: OptionPickerProps<T>) {
  return (
    <section className="sandcastle-option-group" aria-labelledby={`${title}-options`}>
      <h2 id={`${title}-options`}>{title}</h2>
      <div className="sandcastle-option-grid">
        {options.map((option) => {
          const isSelected = option.id === selectedId;

          return (
            <button
              type="button"
              key={option.id}
              className={`sandcastle-option ${isSelected ? 'sandcastle-option--active' : ''}`}
              onClick={() => onSelect(option.id)}
              aria-pressed={isSelected}
            >
              {renderIcon(option.id)}
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default OptionPicker;
