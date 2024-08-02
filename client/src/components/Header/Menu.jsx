export default function Menu({ onClick, active, onChange }) {
  return (
    <select name="Menu" id="menu" className="menu" onClick={onClick}>
      <option
        value="Последнии новости"
        isActive={active === "news"}
        onClick={() => onChange("singUp")}
      >
        Последнии новости
      </option>
      <option
        value="Мероприятия"
        isActive={active === "sport"}
        onClick={() => onChange("singUp")}
      >
        Мероприятия
      </option>
      <option
        value="Спорт"
        isActive={active === "contact"}
        onClick={() => onChange("singUp")}
      >
        Спорт
      </option>
      <option
        value="Учёба"
        isActive={active === "event"}
        onClick={() => onChange("singUp")}
      >
        Учёба
      </option>
      <option
        value="Интерьвью"
        isActive={active === "interview"}
        onClick={() => onChange("singUp")}
      >
        Интерьвью
      </option>
      <option
        value="Контакты"
        isActive={active === "education"}
        onClick={() => onChange("singUp")}
      >
        Контакты
      </option>
    </select>
  );
}
