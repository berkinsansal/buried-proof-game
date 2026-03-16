import { CaseFile } from '../models/case-file';

export const CASE_001: CaseFile = {
  id: 'case-001',
  title: 'Akşam Yemeği Cinayeti',
  overview:
    'Varlıklı bir iş insanı, özel bir akşam yemeği sırasında hayatını kaybeder. Masadaki konuklardan biri katildir.',
  victim: 'Arthur Blackwood',

  suspects: [
    {
      id: 's1',
      name: 'Emily Carter',
      role: 'İş Ortağı',
      summary:
        'Arthur’un uzun yıllardır iş ortağı. Son dönemde aralarında ciddi finansal anlaşmazlıklar yaşandığı biliniyor.',
    },
    {
      id: 's2',
      name: 'Daniel Brooks',
      role: 'Aile Dostu',
      summary: 'Ailenin yakın dostu. Yemeğe diğerlerinden daha geç geldiğini iddia ediyor.',
    },
    {
      id: 's3',
      name: 'Sophia Laurent',
      role: 'Kişisel Asistan',
      summary: 'Arthur ile günlük olarak çalışan ve onun birçok sırrını bilen kişi.',
    },
  ],

  evidence: [
    {
      id: 'e1',
      title: 'Şarap Kadehi',
      type: 'photo',
      summary: 'Kurbanın yanında bulunan bir şarap kadehi.',
      description:
        'Kadehte yapılan incelemede zehir olabileceğine işaret eden kalıntılar tespit edilmiştir.',
    },
    {
      id: 'e2',
      title: 'Telefon Mesajı',
      type: 'message',
      summary: 'Yemekten kısa süre önce gönderilmiş bir mesaj.',
      description:
        'Mesaj içeriği Arthur ile davetlilerden biri arasında gerginlik olduğunu düşündürüyor.',
    },
    {
      id: 'e3',
      title: 'Finansal Rapor',
      type: 'report',
      summary: 'Son finansal kayıtlar.',
      description:
        'Belgelerde kayıp paralarla ilgili bir anlaşmazlığa işaret eden detaylar bulunuyor.',
    },
  ],

  timeline: [
    {
      id: 't1',
      time: '19:10',
      title: 'Konuklar yemeğe ulaşıyor',
      summary: 'Tüm davetlilerin malikane yemek salonunda toplandığı zaman dilimi.',
    },
    {
      id: 't2',
      time: '19:40',
      title: 'Arthur ile tartışma yaşanıyor',
      summary: 'Masa başında Arthur ile bir davetli arasında kısa ama gergin bir konuşma geçiyor.',
    },
    {
      id: 't3',
      time: '20:05',
      title: 'Arthur fenalaşıyor',
      summary: 'Kurban şarabından içtikten kısa süre sonra aniden yere yığılıyor.',
    },
  ],
};
