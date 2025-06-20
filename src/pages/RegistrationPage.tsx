import { useForm, UseFormRegister } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';

const registrationSchema = z.object({
  studentName: z.string().min(3, "Nama siswa harus diisi"),
  parentName: z.string().min(3, "Nama orang tua harus diisi"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  level: z.enum(['sd', 'smp', 'sma'], { errorMap: () => ({ message: "Pilih jenjang pendidikan" }) }),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

interface InputFieldProps {
  label: string;
  name: keyof RegistrationForm;
  type?: string;
  register: UseFormRegister<RegistrationForm>;
  error?: string;
}

const RegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationForm) => {
    console.log(data);
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <PageTransition title="Pendaftaran Berhasil">
        <div className="container mx-auto px-4 py-28 sm:py-36 flex flex-col items-center justify-center text-center min-h-screen">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white">Pendaftaran Berhasil!</h1>
            <p className="mt-4 max-w-lg mx-auto text-text-dark">
              Terima kasih! Pendaftaran Anda telah kami terima. Tim kami akan segera menghubungi Anda untuk proses selanjutnya.
            </p>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition title="Pendaftaran" description="Ambil langkah pertama untuk bergabung dengan Akademi Inovasi Global dengan mengisi formulir pendaftaran online kami.">
      <div className="container mx-auto px-4 py-28 sm:py-36">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Formulir Pendaftaran</h1>
          <p className="mt-4 max-w-2xl mx-auto text-text-dark">
            Ambil langkah pertama untuk bergabung dengan Akademi Inovasi Global.
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-white/10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField label="Nama Calon Siswa" name="studentName" register={register} error={errors.studentName?.message} />
            <InputField label="Nama Orang Tua/Wali" name="parentName" register={register} error={errors.parentName?.message} />
            <InputField label="Email" name="email" type="email" register={register} error={errors.email?.message} />
            <InputField label="Nomor Telepon" name="phone" type="tel" register={register} error={errors.phone?.message} />
            
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Jenjang Pendidikan</label>
              <select
                {...register('level')}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-primary focus:border-primary"
              >
                <option value="">Pilih Jenjang</option>
                <option value="sd">Sekolah Dasar (SD)</option>
                <option value="smp">Sekolah Menengah Pertama (SMP)</option>
                <option value="sma">Sekolah Menengah Atas (SMA)</option>
              </select>
              {errors.level && <p className="text-red-500 text-sm mt-1">{errors.level.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                'Kirim Pendaftaran'
              )}
            </Button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

const InputField = ({ label, name, type = 'text', register, error }: InputFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-text-dark mb-2">{label}</label>
    <input
      id={name}
      type={type}
      {...register(name)}
      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-primary focus:border-primary"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default RegistrationPage;
