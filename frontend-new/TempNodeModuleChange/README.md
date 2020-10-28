Date picker module Support:

Using format in the Datepicker support only date object, but the backend send the date field as a string.
So overriding the nativeDateservice to support string and not just date object.

copy index.js to node_modules\@nebular\date-fns\fesm2015\index.js
copy native-date.service.js to node_modules\@nebular\theme\components\calendar-kit\services\native-date.service.js