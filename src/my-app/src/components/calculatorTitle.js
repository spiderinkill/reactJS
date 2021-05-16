import React from 'react';
import '../css/style.css';

const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      { props.value }
    </div>
  );
}

// Export Calculator Title.
export default CalculatorTitle;
