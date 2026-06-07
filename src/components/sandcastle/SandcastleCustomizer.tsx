import { useState } from 'react';
import '../../css/sandcastle.css';
import OptionPicker from './OptionPicker';
import SandcastleOptionIcon from './SandcastleOptionIcon';
import SandcastlePreview from './SandcastlePreview';
import {
  backgroundOptions,
  baseOptions,
  defaultSandcastleSelection,
  glassesOptions,
  hatOptions,
  type SandcastleSelection,
} from './sandcastleOptions';

function SandcastleCustomizer() {
  const [selection, setSelection] = useState<SandcastleSelection>(defaultSandcastleSelection);

  const updateSelection = <TKey extends keyof SandcastleSelection>(
    key: TKey,
    value: SandcastleSelection[TKey],
  ) => {
    setSelection((currentSelection) => ({
      ...currentSelection,
      [key]: value,
    }));
  };

  return (
    <section className="sandcastle-page" aria-label="Sandcastle customizer">
      <div className="sandcastle-preview-panel" aria-label="Customized sandcastle preview">
        <SandcastlePreview selection={selection} />
      </div>

      <div className="sandcastle-controls" aria-label="Sandcastle customization choices">
        <div className="sandcastle-heading">
          <h2>Build your sandcastle</h2>
          
        </div>

        <OptionPicker
          title="Base"
          options={baseOptions}
          selectedId={selection.base}
          onSelect={(base) => updateSelection('base', base)}
          renderIcon={(base) => <SandcastleOptionIcon type="base" value={base} />}
        />
        <OptionPicker
          title="Hat"
          options={hatOptions}
          selectedId={selection.hat}
          onSelect={(hat) => updateSelection('hat', hat)}
          renderIcon={(hat) => <SandcastleOptionIcon type="hat" value={hat} />}
        />
        <OptionPicker
          title="Background"
          options={backgroundOptions}
          selectedId={selection.background}
          onSelect={(background) => updateSelection('background', background)}
          renderIcon={(background) => <SandcastleOptionIcon type="background" value={background} />}
        />
        <OptionPicker
          title="Glasses"
          options={glassesOptions}
          selectedId={selection.glasses}
          onSelect={(glasses) => updateSelection('glasses', glasses)}
          renderIcon={(glasses) => <SandcastleOptionIcon type="glasses" value={glasses} />}
        />
      </div>
    </section>
  );
}

export default SandcastleCustomizer;
