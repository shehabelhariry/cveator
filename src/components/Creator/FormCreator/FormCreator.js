/** @jsx jsx */

import { useDispatch } from "react-redux";
import { Input, jsx, Select, Label, Textarea } from "theme-ui";

const FormInput = ({ item, storeKey, updater }) => {
  const dispatch = useDispatch();
  if (item.type === "text" || item.type === "date" || item.type === "email") {
    return (
      <Input
        placeholder={item.placeholder}
        defaultValue={storeKey[item.key]}
        type={item.type}
        onChange={(e) => {
          dispatch(
            updater({
              id: storeKey.id,
              key: item.key,
              value: e.target.value,
            })
          );
        }}
      />
    );
  }
  if (item.type === "select") {
    return (
      <Select
        defaultValue={storeKey[item.key]}
        onChange={(e) => {
          dispatch(
            updater({
              id: storeKey.id,
              key: item.key,
              value: e.target.value,
            })
          );
        }}
      >
        {item.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    );
  }

  if (item.type === "text-area") {
    return (
      <Textarea
        placeholder={item.placeholder}
        defaultValue={storeKey[item.key]}
        type={item.type}
        onChange={(e) => {
          dispatch(
            updater({
              id: storeKey.id,
              key: item.key,
              value: e.target.value,
            })
          );
        }}
        rows={8}
      />
    );
  }
  return;
};

const FormCreator = ({ storeKey, minWidth, styles, updater, inputs }) => {
  return (
    <div sx={{ minWidth, ...styles }}>
      {inputs.map((group, index) => {
        return (
          <div key={index} sx={{ variant: "formInlineGroup" }}>
            {group.items.map((item) => {
              return (
                <div
                  key={item.key}
                  sx={{ variant: "formItem", ...item.styles }}
                >
                  {item.label ? (
                    <Label sx={{ mb: 10 }}>{item.label}</Label>
                  ) : null}
                  <FormInput
                    item={item}
                    storeKey={storeKey}
                    updater={updater}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FormCreator;
