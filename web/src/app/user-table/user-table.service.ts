import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './user.interface';
import { Role } from './role.interface';

@Injectable({
  providedIn: 'root'
})
export class UserTableService {

  constructor(private db: AngularFirestore) { }
  /**
   * Get all boards owned by current user function need to be 
   * rehauled to only get user from specified role @TODO Zach
   */
  getUsers(serverId: string) {
    return this.db.collection('servers').doc(serverId).collection<User>('users', ref =>
     ref.orderBy('total_exp', "desc")).valueChanges();
  }

  getRoles(serverId: string) {
    return this.db.collection('servers').doc(serverId).collection<Role>('Roles', ref => 
      ref.orderBy('min_lvl', 'desc')).valueChanges();
  }

}
