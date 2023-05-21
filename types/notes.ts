interface ContactMeta {
  contact_id: string;
  email?: string;
  name?: string | null;
}

interface EmailMeta {
  to?: ContactMeta[];
  cc?: ContactMeta[];
  bcc?: ContactMeta[];
  subject?: string;
  sender?: ContactMeta;
}

interface MessageIdentifier {
  message_id?: string;
  gmail_message_id?: string;
  gmail_draft_id?: string;
  gmail_thread_id?: string;
  mailbutler_message_id?: string;
}

export interface Email {
  identifiers: MessageIdentifier;
  meta: EmailMeta;
  tracking_mode: number;
  is_tracking_active: boolean;
  snooze_state?: {
    from: string;
    until: string;
  };
  send_later_state?: {
    send_at: string;
    delivered_at?: string;
    failure_reason?: string;
  };
  delivered_at?: string;
  first_opened_at?: string | null;
  first_replied_at?: string | null;
  template_id?: string | null;
  signature_id?: string | null;
  note_count: number;
  task_count: number;
  follow_up_state?: {
    remind_at: string;
    completed_at?: string;
  };
  created_at?: string | null;
  updated_at?: string | null;
  id: string;
}

interface ItemContext {
    message_id?: string;
    gmail_message_id?: string;
    gmail_draft_id?: string;
    mailbutler_message_id?: string;
    contact_id?: string;
  }

export interface Note {
    id?: string;
    context?: ItemContext;
    text: string;
    team_id?: string | null;
    created_at?: string;
    updated_at?: string;
    created_by?: string;
    meta?: any;
  }
