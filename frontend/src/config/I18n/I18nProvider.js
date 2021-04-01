import { IntlProvider } from 'react-intl'
import { LOCALS } from './constatn'



//ex
// import translate from "../../../config/I18n/translate";
{
    /* <h1>
  {translate("hello", { name: "ahmed ali" }, "this is the default ")}
  </h1> */
  }

const I18nProvider = ({children, local}) => (
    <IntlProvider
        locale={local}
        messages={LOCALS[local]}
    >
        {children}
    </IntlProvider>
)


export default I18nProvider;