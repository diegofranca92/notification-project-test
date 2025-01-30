export interface Notification {
  id: number
  channel: 'Email' | 'SMS' // Se os canais forem limitados a "Email" e "SMS"
  title: string
  dateSent: string // ou Date, dependendo do seu caso
}
