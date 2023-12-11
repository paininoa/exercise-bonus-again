import { useState } from "react";

export default function ({ mode, label, value, onChange, id, options }) {
  //   formData[(Array, setArray)] = useState({});

  switch (mode) {
    case "input":
      return <input type="text" label={label} />;
    case "select":
      return <select></select>;
    case "checkbox":
      return <input type="checkbox" />;
    case "radio":
      return (
        <div>
          <input type="radio" />
          <input type="radio" />
        </div>
      );
  }
}
