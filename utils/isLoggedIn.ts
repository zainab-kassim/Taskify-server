import { Request, Response, NextFunction } from 'express'; // Import Express types
import passport from "../passport-auth/passport"; // Import the passport module

export default function isLoggedin(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate('jwt', { session: false })(req, res, next);
}
