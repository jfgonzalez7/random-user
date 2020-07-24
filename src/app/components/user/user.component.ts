import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name: string
  email: string
  phone: string
  picture: string

  constructor (private userService: UserService) {}

  ngOnInit (): void {
    this.getRandomUser()
  }

  getRandomUser () {
    this.userService.getRandomName().subscribe(response => {
      console.log(response)
    })
  }
}
