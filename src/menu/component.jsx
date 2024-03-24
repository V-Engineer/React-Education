import { MenuItem } from "../menuItem/component";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((menuItem) => (
        <li>
          <MenuItem menuItem={menuItem} />
        </li>
      ))}
    </ul>
  );
};
