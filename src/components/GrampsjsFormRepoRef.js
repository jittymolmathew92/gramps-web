/*
Form for adding a new event reference
*/

import {html} from 'lit'
import '@material/mwc-textfield'
import '@material/mwc-icon-button'
import '@material/mwc-icon'
import '@material/mwc-button'

import './GrampsjsFormSelectType.js'
import './GrampsjsFormSelectObjectList.js'
import './GrampsjsFormString.js'
import {GrampsjsObjectForm} from './GrampsjsObjectForm.js'

class GrampsjsFormRepoRef extends GrampsjsObjectForm {
  renderForm() {
    let result = []
    let selectOpt = []
    if (this.objRef && this.formData.length && this.formExtended.length) {
      result = this.formData?.find(({ref}) => ref === this.objRef)
      console.log('jit1 result', result)
      selectOpt = this.formExtended?.find(({handle}) => handle === this.objRef)
      console.log('jit1 selectOpt', selectOpt)
    }
    return html`
      <grampsjs-form-select-object-list
        fixedMenuPosition
        style="min-height: 300px;"
        objectType="repository"
        .appState="${this.appState}"
        id="repository-select"
        label="${this._('Select')}"
        .objectsInitial="${selectOpt}"
        class="edit"
      ></grampsjs-form-select-object-list>

      <h4 class="label">${this._('Call Number')}</h4>
      <p>
        <grampsjs-form-string
          fullwidth
          id="call_number"
          value="${this.data.call_number || result?.call_number}"
        ></grampsjs-form-string>
      </p>

      <grampsjs-form-select-type
        required
        id="source-media-type"
        heading="${this._('Type')}"
        .appState="${this.appState}"
        typeName="source_media_types"
        ?loadingTypes=${this.loadingTypes}
        defaultValue="Book"
        .types="${this.types}"
        .value="${result.media_type}"
        .typesLocale="${this.typesLocale}"
      >
      </grampsjs-form-select-type>
    `
  }
}

window.customElements.define('grampsjs-form-reporef', GrampsjsFormRepoRef)
