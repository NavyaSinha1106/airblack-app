import { FormText, buttonText } from "../../resource";
import "../FormSection/FormSection.css";
function FormSection() {
  return (
    <div className="form-section">
      <p>{FormText.formTitle}</p>
      <form>
        <div className="form-field">
          <label>{FormText.nameLabel}</label>
          <input placeholder="Eg. Aneesha Mehra" />
        </div>
        <div className="form-field">
          <label>{FormText.phoneLabel}</label>
          <div className="mobile-field">
            <select>
              <option>+91</option>
            </select>
            <input placeholder="Eg. 0000000000" />
          </div>
        </div>
        <div className="form-field">
          <label>{FormText.professionLabel}</label>
          <select>
            <option>Choose the most relevant option</option>
          </select>
        </div>
        <div className="form-field">
          <label>{FormText.goalLabel}</label>
          <select>
            <option>Choose the most relevant option</option>
          </select>
        </div>
        <div className="form-field">
          <label>{FormText.cityLabel}</label>
          <select>
            <option>Choose the most relevant option</option>
          </select>
        </div>
        <button className="submit-btn" type="submit">
          {buttonText.submitBtn}
        </button>
      </form>
    </div>
  );
}

export default FormSection;
