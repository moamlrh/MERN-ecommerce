import { FormattedMessage } from 'react-intl'

const translate = (id, values = {}, defaultMessage = "Translate is en empty !") => (
    <FormattedMessage
        defaultMessage={defaultMessage}
        id={id}
        values={values}
    />
)

export default translate;