// import React, { useState } from "react";
// import { Header } from "../components/Header";

// export const ContactFormPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <ContactForm />
//       </div>
//     </div>
//   );
// };

// export const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     bedriftsnavn: "",
//     navn: "",
//     epost: "",
//     telefonnummer: "",
//     melding: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const emailBody = `
// Bedriftsnavn: ${formData.bedriftsnavn}
// Navn: ${formData.navn}
// E-post: ${formData.epost}
// Telefonnummer: ${formData.telefonnummer}

// Melding:
// ${formData.melding}
//       `.trim();

//       const mailtoLink = `mailto:kontakt@dotdagene.no?subject=Henvendelse fra ${
//         formData.bedriftsnavn
//       }&body=${encodeURIComponent(emailBody)}`;

//       window.location.href = mailtoLink;

//       setFormData({
//         bedriftsnavn: "",
//         navn: "",
//         epost: "",
//         telefonnummer: "",
//         melding: "",
//       });
//       setSubmitStatus("success");
//     } catch (error) {
//       console.error("Error opening email client:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Kontakt oss
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label
//                 htmlFor="bedriftsnavn"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Bedriftsnavn <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="bedriftsnavn"
//                 name="bedriftsnavn"
//                 value={formData.bedriftsnavn}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="Skriv inn bedriftsnavn"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//               />
//             </div>

//             <div className="space-y-2">
//               <label
//                 htmlFor="navn"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Navn <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="navn"
//                 name="navn"
//                 value={formData.navn}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="Skriv inn ditt navn"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//               />
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label
//                 htmlFor="epost"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 E-post <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="epost"
//                 name="epost"
//                 value={formData.epost}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="din.epost@eksempel.no"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//               />
//             </div>

//             <div className="space-y-2">
//               <label
//                 htmlFor="telefonnummer"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Telefonnummer <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="telefonnummer"
//                 name="telefonnummer"
//                 value={formData.telefonnummer}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="+47 123 45 678"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label
//               htmlFor="melding"
//               className="text-sm font-medium text-gray-700"
//             >
//               Melding <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               id="melding"
//               name="melding"
//               value={formData.melding}
//               onChange={handleInputChange}
//               required
//               rows={5}
//               placeholder="Skriv en melding om hva du lurer på..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
//             />
//           </div>

//           <button
//             type="submit"
//             className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-colors ${
//               isSubmitting
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             }`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Sender..." : "Send melding"}
//           </button>

//           {submitStatus === "success" && (
//             <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
//               <p className="text-center font-medium">
//                 E-postklienten din skal nå åpne seg. Takk for din henvendelse!
//               </p>
//             </div>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const ContactFormPage = () => {
  return (
    <div className="min-h-scree">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    bedriftsnavn: '',
    navn: '',
    epost: '',
    telefonnummer: '',
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
Navn: ${formData.navn}
E-post: ${formData.epost}
Telefonnummer: ${formData.telefonnummer}

Melding:
${formData.melding}
      `.trim();

      const mailtoLink = `mailto:kontakt@dotdagene.no?subject=Henvendelse fra ${
        formData.bedriftsnavn
      }&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      setFormData({
        bedriftsnavn: '',
        navn: '',
        epost: '',
        telefonnummer: '',
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
      <Header />

      {/* Hero section matching home page typography */}
      <div className="text-center mb-16 px-5 md:px-0">
        <h1 className="text-6xl md:text-7xl mb-6">
          <b>Kontakt oss</b>
        </h1>
        <p className="text-4xl md:text-5xl italic">
          Vi vil gjerne høre fra deg!
        </p>
      </div>

      {/* Form with updated styling */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
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
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="navn" className="text-lg font-bold text-gray-800">
                Navn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="navn"
                name="navn"
                value={formData.navn}
                onChange={handleInputChange}
                required
                placeholder="Skriv inn ditt navn"
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label
                htmlFor="epost"
                className="text-lg font-bold text-gray-800"
              >
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
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor="telefonnummer"
                className="text-lg font-bold text-gray-800"
              >
                Telefonnummer <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefonnummer"
                name="telefonnummer"
                value={formData.telefonnummer}
                onChange={handleInputChange}
                required
                placeholder="+47 123 45 678"
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="melding"
              className="text-lg font-bold text-gray-800"
            >
              Melding <span className="text-red-500">*</span>
            </label>
            <textarea
              id="melding"
              name="melding"
              value={formData.melding}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder="Skriv en melding om hva du lurer på..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 resize-vertical"
            />
          </div>

          <div className="flex justify-center">
            <Button color="green" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sender...' : 'Send melding'}
            </Button>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-green-800">
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
