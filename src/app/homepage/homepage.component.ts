import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own 
import 'ace-builds/src-noconflict/mode-javascript';
// ui-theme package
import 'ace-builds/src-noconflict/theme-github';

const THEME = 'ace/theme/github';
const LANG = 'ace/mode/javascript';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;

  constructor() { }

  ngOnInit() {

  const element = this.codeEditorElmRef.nativeElement;
  const editorOptions: Partial<ace.Ace.EditorOptions> = {
    highlightActiveLine: true,
    minLines: 10,
    maxLines: Infinity,
  };

  this.codeEditor = ace.edit(element, editorOptions);
  this.codeEditor.setTheme(THEME);
  this.codeEditor.getSession().setMode(LANG);
  this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
}
}
