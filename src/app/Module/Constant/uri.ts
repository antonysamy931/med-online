export class Uri {
    public GetCaptcha: string = "/api/v1/captcha/getcaptcha";
    public Login: string = "/api/v1/account/login";
    public ForgotPassword: string = "/api/v1/account/forgotpassword";
    public VerifyToken: string = "/api/v1/account/verifytoken";
    public ResetPassword: string = "/api/v1/account/resetpassword";
    public GetPharmas: string = "/api/v1/pharma/getpharmas";
    public CreatePharma: string = "/api/v1/pharma/createpharma";
    public PharmaById: string = "/api/v1/pharma/getpharmabyid";
    public UpdatePharmaDetail: string = "/api/v1/pharma/updatepharma";
    public DeletePharmaDetail: string = "/api/v1/pharma/deletepharma";
    public PharmaCount: string = "/api/v1/pharma/pharmascount";
    public PharmaUsers: string = "/api/v1/user/getpharmausers";
    public CreatePharmaUser: string = "/api/v1/user/addpharmauser";
    public GetPharmaUserDetail: string = "/api/v1/user/getpharmauserbyid";
    public UpdatePharmaUserDetail: string = "/api/v1/user/updatepharmauserdetail";
    public DeletePharmaUserDetail: string = "/api/v1/user/deletepharmauserdetail";

    public CountryJson: string = "/api/v1/utility/getallcountries";

    public MedUsers: string = "/api/v1/user/getmedusers";
}
