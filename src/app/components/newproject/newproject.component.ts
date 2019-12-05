import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service: ProjectService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      project_name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      const data = JSON.stringify(this.registerForm.value, null, 4);
      this.service.postProject(JSON.parse(data)).subscribe(
        result => { console.log(result); },
        error => { console.log(error); }
      );
      alert('SUCCESS!! :-)\n\n' + data + '\nAddedd Successfully!');
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
