import React, { useEffect } from 'react'
import { DeepPartial, Path, PathValue, SubmitHandler, UnpackNestedValue, useForm, UseFormReturn } from 'react-hook-form'

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

export const FormWrap = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    shouldUnregister: false,
  });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};

type FormDefaultValueProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  defaultValues: UnpackNestedValue<DeepPartial<TFormValues>>,
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
}

export const FormDefaultValueWrap = <TFormValues,>({
  onSubmit,
  defaultValues,
  children
}: FormDefaultValueProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  useEffect(() => {
    if (!defaultValues) return
    methods.reset(defaultValues);
  }, [defaultValues])
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};
