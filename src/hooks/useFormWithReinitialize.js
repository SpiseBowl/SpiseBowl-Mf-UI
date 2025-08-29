import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function useFormWithReinitialize({
  defaultValues,
  enableReinitialize = false,
  ...rest
}) {
  const methods = useForm({ defaultValues, ...rest });

  useEffect(() => {
    if (enableReinitialize) {
      methods.reset(defaultValues);
    }
    // Only reset when the stringified defaultValues change
  }, [enableReinitialize, JSON.stringify(defaultValues)]);

  return methods;
}
