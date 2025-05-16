import React, { useState } from "react";
import { Box, TextField, Grid, Alert, Snackbar } from "@mui/material";
import { Send } from "@mui/icons-material";
import { PrimaryButton } from "../../atoms/Button";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para validação e feedback
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Estado para notificação de sucesso
  const [showSuccess, setShowSuccess] = useState(false);

  // Manipulador de mudança nos campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpar erro quando o usuário começa a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  // Validar email com regex simples
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manipulador de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "" || !isValidEmail(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    // Se não houver erros, processar o envio
    if (!Object.values(newErrors).some((error) => error)) {
      // Aqui você adicionaria a lógica para enviar o formulário para um backend
      console.log("Formulário enviado:", formData);

      // Resetar formulário e mostrar mensagem de sucesso
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
    }
  };

  // Fechar notificação de sucesso
  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name ? "Por favor, informe Patryck Sans" : ""}
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={
              errors.email ? "Por favor, informe um email válido" : ""
            }
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mensagem"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message ? "Por favor, escreva uma mensagem" : ""}
            required
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} className={styles.submitContainer}>
          <PrimaryButton type="submit" startIcon={<Send />} size="large">
            Enviar Mensagem
          </PrimaryButton>
        </Grid>
      </Grid>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSuccess} severity="success" variant="filled">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
