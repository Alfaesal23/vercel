/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { teamsCreate } from "../funcs/teamsCreate.js";
import { teamsDelete } from "../funcs/teamsDelete.js";
import { teamsDeleteInviteCode } from "../funcs/teamsDeleteInviteCode.js";
import { teamsGet } from "../funcs/teamsGet.js";
import { teamsGetAccessRequest } from "../funcs/teamsGetAccessRequest.js";
import { teamsGetMembers } from "../funcs/teamsGetMembers.js";
import { teamsInviteUser } from "../funcs/teamsInviteUser.js";
import { teamsJoin } from "../funcs/teamsJoin.js";
import { teamsList } from "../funcs/teamsList.js";
import { teamsRemoveMember } from "../funcs/teamsRemoveMember.js";
import { teamsRequestAccess } from "../funcs/teamsRequestAccess.js";
import { teamsUpdate } from "../funcs/teamsUpdate.js";
import { teamsUpdateMember } from "../funcs/teamsUpdateMember.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Team } from "../models/components/team.js";
import {
  CreateTeamRequestBody,
  CreateTeamResponseBody,
} from "../models/operations/createteam.js";
import {
  DeleteTeamRequest,
  DeleteTeamResponseBody,
} from "../models/operations/deleteteam.js";
import {
  DeleteTeamInviteCodeRequest,
  DeleteTeamInviteCodeResponseBody,
} from "../models/operations/deleteteaminvitecode.js";
import { GetTeamRequest } from "../models/operations/getteam.js";
import {
  GetTeamAccessRequestRequest,
  GetTeamAccessRequestResponseBody,
} from "../models/operations/getteamaccessrequest.js";
import {
  GetTeamMembersRequest,
  GetTeamMembersResponseBody,
} from "../models/operations/getteammembers.js";
import {
  GetTeamsRequest,
  GetTeamsResponseBody,
} from "../models/operations/getteams.js";
import {
  InviteUserToTeamRequest,
  InviteUserToTeamResponseBody,
} from "../models/operations/inviteusertoteam.js";
import {
  JoinTeamRequest,
  JoinTeamResponseBody,
} from "../models/operations/jointeam.js";
import { PatchTeamRequest } from "../models/operations/patchteam.js";
import {
  RemoveTeamMemberRequest,
  RemoveTeamMemberResponseBody,
} from "../models/operations/removeteammember.js";
import {
  RequestAccessToTeamRequest,
  RequestAccessToTeamResponseBody,
} from "../models/operations/requestaccesstoteam.js";
import {
  UpdateTeamMemberRequest,
  UpdateTeamMemberResponseBody,
} from "../models/operations/updateteammember.js";
import { unwrapAsync } from "../types/fp.js";

export class Teams extends ClientSDK {
  /**
   * List team members
   *
   * @remarks
   * Get a paginated list of team members for the provided team.
   */
  async getMembers(
    request: GetTeamMembersRequest,
    options?: RequestOptions,
  ): Promise<GetTeamMembersResponseBody> {
    return unwrapAsync(teamsGetMembers(
      this,
      request,
      options,
    ));
  }

  /**
   * Invite a user
   *
   * @remarks
   * Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user can be specified with an email or an ID. If both email and ID are provided, ID will take priority.
   */
  async inviteUser(
    request: InviteUserToTeamRequest,
    options?: RequestOptions,
  ): Promise<InviteUserToTeamResponseBody> {
    return unwrapAsync(teamsInviteUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Request access to a team
   *
   * @remarks
   * Request access to a team as a member. An owner has to approve the request. Only 10 users can request access to a team at the same time.
   */
  async requestAccess(
    request: RequestAccessToTeamRequest,
    options?: RequestOptions,
  ): Promise<RequestAccessToTeamResponseBody> {
    return unwrapAsync(teamsRequestAccess(
      this,
      request,
      options,
    ));
  }

  /**
   * Get access request status
   *
   * @remarks
   * Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.
   */
  async getAccessRequest(
    request: GetTeamAccessRequestRequest,
    options?: RequestOptions,
  ): Promise<GetTeamAccessRequestResponseBody> {
    return unwrapAsync(teamsGetAccessRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Join a team
   *
   * @remarks
   * Join a team with a provided invite code or team ID.
   */
  async join(
    request: JoinTeamRequest,
    options?: RequestOptions,
  ): Promise<JoinTeamResponseBody> {
    return unwrapAsync(teamsJoin(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a Team Member
   *
   * @remarks
   * Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.
   */
  async updateMember(
    request: UpdateTeamMemberRequest,
    options?: RequestOptions,
  ): Promise<UpdateTeamMemberResponseBody> {
    return unwrapAsync(teamsUpdateMember(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a Team Member
   *
   * @remarks
   * Remove a Team Member from the Team, or dismiss a user that requested access, or leave a team.
   */
  async removeMember(
    request: RemoveTeamMemberRequest,
    options?: RequestOptions,
  ): Promise<RemoveTeamMemberResponseBody> {
    return unwrapAsync(teamsRemoveMember(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a Team
   *
   * @remarks
   * Get information for the Team specified by the `teamId` parameter.
   */
  async get(
    request: GetTeamRequest,
    options?: RequestOptions,
  ): Promise<Team> {
    return unwrapAsync(teamsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a Team
   *
   * @remarks
   * Update the information of a Team specified by the `teamId` parameter. The request body should contain the information that will be updated on the Team.
   */
  async update(
    request: PatchTeamRequest,
    options?: RequestOptions,
  ): Promise<Team> {
    return unwrapAsync(teamsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * List all teams
   *
   * @remarks
   * Get a paginated list of all the Teams the authenticated User is a member of.
   */
  async list(
    request: GetTeamsRequest,
    options?: RequestOptions,
  ): Promise<GetTeamsResponseBody> {
    return unwrapAsync(teamsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a Team
   *
   * @remarks
   * Create a new Team under your account. You need to send a POST request with the desired Team slug, and optionally the Team name.
   */
  async create(
    request?: CreateTeamRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<CreateTeamResponseBody> {
    return unwrapAsync(teamsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Team
   *
   * @remarks
   * Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.
   */
  async delete(
    request: DeleteTeamRequest,
    options?: RequestOptions,
  ): Promise<DeleteTeamResponseBody> {
    return unwrapAsync(teamsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Team invite code
   *
   * @remarks
   * Delete an active Team invite code.
   */
  async deleteInviteCode(
    request: DeleteTeamInviteCodeRequest,
    options?: RequestOptions,
  ): Promise<DeleteTeamInviteCodeResponseBody> {
    return unwrapAsync(teamsDeleteInviteCode(
      this,
      request,
      options,
    ));
  }
}