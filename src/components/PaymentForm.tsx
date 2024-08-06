"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { insertMaskInCpf } from "@/utils/cpfMask";
import { insertMaskInCreditCard } from "@/utils/creditCardMask";
import { FormControl, TextField, MenuItem, Box } from "@mui/material";
import { insertMaskInDate } from "@/utils/dateMask";
import { insertMaskInCVV } from "@/utils/cvvMask";
import { insertMaskInName } from "@/utils/nameMask";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormValuesProps {
  name: string;
  cpf: string;
  creditCardNumber: string;
  date: string;
  cvv: string;
}

const installments = [
  {
    value: 15300,
    label: "1x de R$ 15.300,00",
  },
  {
    value: 10196.66,
    label: "2x de R$ 10.196,66",
  },
  {
    value: 7725,
    label: "3x de R$ 7.725,00",
  },
  {
    value: 6300,
    label: "4x de R$ 6.300,00",
  },
  {
    value: 5283.33,
    label: "5x de R$ 5.283,33",
  },
  {
    value: 4542.85,
    label: "6x de R$ 4.542,85",
  },
];

export function PaymentForm() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [creditCardNumber, setCreditCardNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [selectedInstallment, setSelectedInstallment] = useState<number | string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesProps>();

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(insertMaskInName(e.target.value));
  }

  function handleCpfChange(e: ChangeEvent<HTMLInputElement>) {
    setCpf(insertMaskInCpf(e.target.value));
  }

  function handleCreditCardChange(e: ChangeEvent<HTMLInputElement>) {
    setCreditCardNumber(insertMaskInCreditCard(e.target.value));
  }

  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    setDate(insertMaskInDate(e.target.value));
  }

  function handleCvvChange(e: ChangeEvent<HTMLInputElement>) {
    setCvv(insertMaskInCVV(e.target.value));
  }

  useEffect(() => {
    if (installments.length > 0) {
      setSelectedInstallment(installments[0].value);
    }
  }, []);

  function handleChangeInstallment(e: ChangeEvent<HTMLInputElement>) {
    setSelectedInstallment(e.target.value);
  }

  const onSubmit: SubmitHandler<FormValuesProps> = () => {
    router.push("/pagamento-concluido");
  };

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-md gap-6"
    >
      <TextField
        {...register("name", { required: "Nome inválido" })}
        id="outlined-basic"
        label="Nome completo"
        variant="outlined"
        onChange={handleNameChange}
        value={name}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("cpf", { required: "CPF inválido" })}
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        onChange={handleCpfChange}
        value={cpf}
        error={!!errors.cpf}
        inputProps={{ maxLength: 14 }}
        helperText={errors.cpf?.message}
      />
      <TextField
        {...register("creditCardNumber", {
          required: "Número do Cartão inválido",
        })}
        id="outlined-basic"
        label="Número do cartão"
        variant="outlined"
        onChange={handleCreditCardChange}
        value={creditCardNumber}
        error={!!errors.creditCardNumber}
        inputProps={{ maxLength: 19 }}
        helperText={errors.creditCardNumber?.message}
      />
      <Box className="flex gap-6">
        <TextField
          {...register("date", { required: "Data inválida" })}
          id="outlined-basic"
          label="Vencimento"
          variant="outlined"
          onChange={handleDateChange}
          value={date}
          error={!!errors.date}
          inputProps={{ maxLength: 5 }}
          helperText={errors.date?.message}
        />
        <TextField
          {...register("cvv", { required: "CVV inválido" })}
          id="outlined-basic"
          label="CVV"
          variant="outlined"
          onChange={handleCvvChange}
          value={cvv}
          error={!!errors.cvv}
          inputProps={{ maxLength: 3 }}
          helperText={errors.cvv?.message}
        />
      </Box>
      <TextField
        id="outlined-select-currency"
        select
        label="Parcelas"
        value={selectedInstallment}
        onChange={handleChangeInstallment}
      >
        {installments.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <button
        type="submit"
        className="bg-blue hover:bg-blue-light transition duration-100 ease-in text-white rounded-lg py-1 font-semibold text-lg"
      >
        Pagar
      </button>
    </FormControl>
  );
}
