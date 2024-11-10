import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("🚀 ~ req:", req.url)
  return next(req);
};
