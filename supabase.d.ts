// supabase.d.ts
import { VerifyOtpParams } from '@supabase/supabase-js';

declare module '@supabase/supabase-js' {
    interface VerifyOtpParams {
        type?: 'signup' | 'email_change' | 'magiclink' | 'invite' | 'recovery' | undefined;
    }
}