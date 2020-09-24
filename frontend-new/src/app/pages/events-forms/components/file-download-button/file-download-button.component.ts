import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../../../services/rest-api.service';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'ngx-file-download-button',
  templateUrl: './file-download-button.component.html',
  styleUrls: ['./file-download-button.component.scss']
})
export class FileDownloadButtonComponent implements OnInit {
  @Input() fileFullName;

  constructor(private RestApiService: RestApiService, private ToastService:ToastService) { }


  ngOnInit() {
  }

  /*getFile(value){
    this.RestApiService.getFile(url: string).subscribe(
      data => { this.downloadFile(data); },
      error => { this.ToastService.showToast('fail', 'בעיה בהורדת הקובץ', '') },
    );
  }

  downloadFile(data) {
    var blob = new Blob([data], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    anchor.download = "file name";
    anchor.href = url;
    anchor.click();
  }*/

  getFileName(fileNameWithPath){
    if (fileNameWithPath) return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1)
  }

}
