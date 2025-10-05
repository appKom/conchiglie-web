import React, { useState } from 'react';
import { Header } from '../Header';
import { Button } from '../Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    bedriftsnavn: '',
    kontaktperson: '',
    stilling: '',
    epost: '',
    telefon: '',
    melding: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
Bedriftsnavn: ${formData.bedriftsnavn}
Kontaktperson: ${formData.kontaktperson}
Stilling: ${formData.stilling}
E-post: ${formData.epost}
Telefon: ${formData.telefon}

Melding:
${formData.melding}
      `.trim();

      const mailtoLink = `mailto:kontakt@dotdagene.no?subject=Henvendelse fra ${
        formData.bedriftsnavn
      }&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      setFormData({
        bedriftsnavn: '',
        kontaktperson: '',
        stilling: '',
        epost: '',
        telefon: '',
        melding: '',
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error opening email client:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Bedriftsnavn: full line */}
          <div className="space-y-3">
            <label
              htmlFor="bedriftsnavn"
              className="text-lg font-bold text-gray-800"
            >
              Bedriftsnavn <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bedriftsnavn"
              name="bedriftsnavn"
              value={formData.bedriftsnavn}
              onChange={handleInputChange}
              required
              placeholder="Skriv inn bedriftsnavn"
              className="w-full border-3 border-black bg-white px-3 py-3 text-lg"
            />
          </div>

          {/* Kontaktperson + Stilling: split line */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <label
                htmlFor="kontaktperson"
                className="text-lg font-bold text-gray-800"
              >
                Kontaktperson <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="kontaktperson"
                name="kontaktperson"
                value={formData.kontaktperson}
                onChange={handleInputChange}
                required
                placeholder="Navn på kontaktperson"
                className="w-full border-3 border-black bg-white px-3 py-3 text-lg"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="stilling"
                className="text-lg font-bold text-gray-800"
              >
                Stilling <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="stilling"
                name="stilling"
                value={formData.stilling}
                onChange={handleInputChange}
                required
                placeholder="Stillingstittel"
                className="w-full border-3 border-black bg-white px-3 py-3 text-lg"
              />
            </div>
          </div>

          {/* E-post: full line */}
          <div className="space-y-3">
            <label htmlFor="epost" className="text-lg font-bold text-gray-800">
              E-post <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="epost"
              name="epost"
              value={formData.epost}
              onChange={handleInputChange}
              required
              placeholder="din.epost@eksempel.no"
              className="w-full border-3 border-black bg-white px-3 py-3 text-lg"
            />
          </div>

          {/* Telefon: full line */}
          <div className="space-y-3">
            <label
              htmlFor="telefon"
              className="text-lg font-bold text-gray-800"
            >
              Telefon <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleInputChange}
              required
              placeholder="+47 123 45 678"
              className="w-full border-3 border-black bg-white px-3 py-3 text-lg"
            />
          </div>

          {/* Melding: textarea, about 4 lines */}
          <div className="space-y-3">
            <label
              htmlFor="melding"
              className="text-lg font-bold text-gray-800"
            >
              Melding
            </label>
            <textarea
              id="melding"
              name="melding"
              value={formData.melding}
              onChange={handleInputChange}
              rows={4}
              placeholder="Skriv en melding..."
              className="resize-vertical w-full border-3 border-black bg-white px-3 py-3 text-lg"
            />
          </div>

          <div className="flex justify-center">
            <Button color="green" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sender...' : 'Send melding'}
            </Button>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-dotgreen border-3 border-black p-6 text-white">
              <p className="text-center text-lg font-medium">
                E-postklienten din skal nå åpne seg. Takk for din henvendelse!
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
