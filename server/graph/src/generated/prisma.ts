import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateChurch {
  count: Int!
}

type AggregateDepartment {
  count: Int!
}

type AggregateDisciple {
  count: Int!
}

type AggregateFloor {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

type Church implements Node {
  id: ID!
  domain: String!
  name: String!
  _floors(where: FloorWhereInput, orderBy: FloorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Floor!]
}

"""
A connection to a list of items.
"""
type ChurchConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ChurchEdge]!
  aggregate: AggregateChurch!
}

input ChurchCreateInput {
  domain: String!
  name: String!
  _floors: FloorCreateManyWithout_churchInput
}

input ChurchCreateOneWithout_floorsInput {
  create: ChurchCreateWithout_floorsInput
  connect: ChurchWhereUniqueInput
}

input ChurchCreateWithout_floorsInput {
  domain: String!
  name: String!
}

"""
An edge in a connection.
"""
type ChurchEdge {
  """
  The item at the end of the edge.
  """
  node: Church!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ChurchOrderByInput {
  id_ASC
  id_DESC
  domain_ASC
  domain_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ChurchPreviousValues {
  id: ID!
  domain: String!
  name: String!
}

type ChurchSubscriptionPayload {
  mutation: MutationType!
  node: Church
  updatedFields: [String!]
  previousValues: ChurchPreviousValues
}

input ChurchSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ChurchSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ChurchSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ChurchSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChurchWhereInput
}

input ChurchUpdateInput {
  domain: String
  name: String
  _floors: FloorUpdateManyWithout_churchInput
}

input ChurchUpdateOneWithout_floorsInput {
  create: ChurchCreateWithout_floorsInput
  connect: ChurchWhereUniqueInput
  delete: Boolean
  update: ChurchUpdateWithout_floorsDataInput
  upsert: ChurchUpsertWithout_floorsInput
}

input ChurchUpdateWithout_floorsDataInput {
  domain: String
  name: String
}

input ChurchUpsertWithout_floorsInput {
  update: ChurchUpdateWithout_floorsDataInput!
  create: ChurchCreateWithout_floorsInput!
}

input ChurchWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ChurchWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ChurchWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ChurchWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  domain: String
  """
  All values that are not equal to given value.
  """
  domain_not: String
  """
  All values that are contained in given list.
  """
  domain_in: [String!]
  """
  All values that are not contained in given list.
  """
  domain_not_in: [String!]
  """
  All values less than the given value.
  """
  domain_lt: String
  """
  All values less than or equal the given value.
  """
  domain_lte: String
  """
  All values greater than the given value.
  """
  domain_gt: String
  """
  All values greater than or equal the given value.
  """
  domain_gte: String
  """
  All values containing the given string.
  """
  domain_contains: String
  """
  All values not containing the given string.
  """
  domain_not_contains: String
  """
  All values starting with the given string.
  """
  domain_starts_with: String
  """
  All values not starting with the given string.
  """
  domain_not_starts_with: String
  """
  All values ending with the given string.
  """
  domain_ends_with: String
  """
  All values not ending with the given string.
  """
  domain_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  _floors_every: FloorWhereInput
  _floors_some: FloorWhereInput
  _floors_none: FloorWhereInput
}

input ChurchWhereUniqueInput {
  id: ID
  domain: String
}

scalar DateTime

type Department implements Node {
  id: ID!
  domain: String!
  _leader(where: DiscipleWhereInput): Disciple!
  _rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  _disciples(where: DiscipleWhereInput, orderBy: DiscipleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Disciple!]
}

"""
A connection to a list of items.
"""
type DepartmentConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [DepartmentEdge]!
  aggregate: AggregateDepartment!
}

input DepartmentCreateInput {
  domain: String!
  _leader: DiscipleCreateOneWithout_departmentLeaderInput!
  _rooms: RoomCreateManyWithout_departmentsInput
  _disciples: DiscipleCreateManyWithout_memberOfInput
}

input DepartmentCreateManyWithout_roomsInput {
  create: [DepartmentCreateWithout_roomsInput!]
  connect: [DepartmentWhereUniqueInput!]
}

input DepartmentCreateOneWithout_disciplesInput {
  create: DepartmentCreateWithout_disciplesInput
  connect: DepartmentWhereUniqueInput
}

input DepartmentCreateOneWithout_leaderInput {
  create: DepartmentCreateWithout_leaderInput
  connect: DepartmentWhereUniqueInput
}

input DepartmentCreateWithout_disciplesInput {
  domain: String!
  _leader: DiscipleCreateOneWithout_departmentLeaderInput!
  _rooms: RoomCreateManyWithout_departmentsInput
}

input DepartmentCreateWithout_leaderInput {
  domain: String!
  _rooms: RoomCreateManyWithout_departmentsInput
  _disciples: DiscipleCreateManyWithout_memberOfInput
}

input DepartmentCreateWithout_roomsInput {
  domain: String!
  _leader: DiscipleCreateOneWithout_departmentLeaderInput!
  _disciples: DiscipleCreateManyWithout_memberOfInput
}

"""
An edge in a connection.
"""
type DepartmentEdge {
  """
  The item at the end of the edge.
  """
  node: Department!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum DepartmentOrderByInput {
  id_ASC
  id_DESC
  domain_ASC
  domain_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DepartmentPreviousValues {
  id: ID!
  domain: String!
}

type DepartmentSubscriptionPayload {
  mutation: MutationType!
  node: Department
  updatedFields: [String!]
  previousValues: DepartmentPreviousValues
}

input DepartmentSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DepartmentSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DepartmentSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [DepartmentSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DepartmentWhereInput
}

input DepartmentUpdateInput {
  domain: String
  _leader: DiscipleUpdateOneWithout_departmentLeaderInput
  _rooms: RoomUpdateManyWithout_departmentsInput
  _disciples: DiscipleUpdateManyWithout_memberOfInput
}

input DepartmentUpdateManyWithout_roomsInput {
  create: [DepartmentCreateWithout_roomsInput!]
  connect: [DepartmentWhereUniqueInput!]
  disconnect: [DepartmentWhereUniqueInput!]
  delete: [DepartmentWhereUniqueInput!]
  update: [DepartmentUpdateWithWhereUniqueWithout_roomsInput!]
  upsert: [DepartmentUpsertWithWhereUniqueWithout_roomsInput!]
}

input DepartmentUpdateOneWithout_disciplesInput {
  create: DepartmentCreateWithout_disciplesInput
  connect: DepartmentWhereUniqueInput
  delete: Boolean
  update: DepartmentUpdateWithout_disciplesDataInput
  upsert: DepartmentUpsertWithout_disciplesInput
}

input DepartmentUpdateOneWithout_leaderInput {
  create: DepartmentCreateWithout_leaderInput
  connect: DepartmentWhereUniqueInput
  delete: Boolean
  update: DepartmentUpdateWithout_leaderDataInput
  upsert: DepartmentUpsertWithout_leaderInput
}

input DepartmentUpdateWithout_disciplesDataInput {
  domain: String
  _leader: DiscipleUpdateOneWithout_departmentLeaderInput
  _rooms: RoomUpdateManyWithout_departmentsInput
}

input DepartmentUpdateWithout_leaderDataInput {
  domain: String
  _rooms: RoomUpdateManyWithout_departmentsInput
  _disciples: DiscipleUpdateManyWithout_memberOfInput
}

input DepartmentUpdateWithout_roomsDataInput {
  domain: String
  _leader: DiscipleUpdateOneWithout_departmentLeaderInput
  _disciples: DiscipleUpdateManyWithout_memberOfInput
}

input DepartmentUpdateWithWhereUniqueWithout_roomsInput {
  where: DepartmentWhereUniqueInput!
  data: DepartmentUpdateWithout_roomsDataInput!
}

input DepartmentUpsertWithout_disciplesInput {
  update: DepartmentUpdateWithout_disciplesDataInput!
  create: DepartmentCreateWithout_disciplesInput!
}

input DepartmentUpsertWithout_leaderInput {
  update: DepartmentUpdateWithout_leaderDataInput!
  create: DepartmentCreateWithout_leaderInput!
}

input DepartmentUpsertWithWhereUniqueWithout_roomsInput {
  where: DepartmentWhereUniqueInput!
  update: DepartmentUpdateWithout_roomsDataInput!
  create: DepartmentCreateWithout_roomsInput!
}

input DepartmentWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DepartmentWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DepartmentWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [DepartmentWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  domain: String
  """
  All values that are not equal to given value.
  """
  domain_not: String
  """
  All values that are contained in given list.
  """
  domain_in: [String!]
  """
  All values that are not contained in given list.
  """
  domain_not_in: [String!]
  """
  All values less than the given value.
  """
  domain_lt: String
  """
  All values less than or equal the given value.
  """
  domain_lte: String
  """
  All values greater than the given value.
  """
  domain_gt: String
  """
  All values greater than or equal the given value.
  """
  domain_gte: String
  """
  All values containing the given string.
  """
  domain_contains: String
  """
  All values not containing the given string.
  """
  domain_not_contains: String
  """
  All values starting with the given string.
  """
  domain_starts_with: String
  """
  All values not starting with the given string.
  """
  domain_not_starts_with: String
  """
  All values ending with the given string.
  """
  domain_ends_with: String
  """
  All values not ending with the given string.
  """
  domain_not_ends_with: String
  _leader: DiscipleWhereInput
  _rooms_every: RoomWhereInput
  _rooms_some: RoomWhereInput
  _rooms_none: RoomWhereInput
  _disciples_every: DiscipleWhereInput
  _disciples_some: DiscipleWhereInput
  _disciples_none: DiscipleWhereInput
}

input DepartmentWhereUniqueInput {
  id: ID
  domain: String
}

type Disciple implements Node {
  id: ID!
  fullname: String!
  firstName: String!
  lastName: String!
  _departmentLeader(where: DepartmentWhereInput): Department!
  _memberOf(where: DepartmentWhereInput): Department!
}

"""
A connection to a list of items.
"""
type DiscipleConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [DiscipleEdge]!
  aggregate: AggregateDisciple!
}

input DiscipleCreateInput {
  fullname: String!
  firstName: String!
  lastName: String!
  _departmentLeader: DepartmentCreateOneWithout_leaderInput!
  _memberOf: DepartmentCreateOneWithout_disciplesInput!
}

input DiscipleCreateManyWithout_memberOfInput {
  create: [DiscipleCreateWithout_memberOfInput!]
  connect: [DiscipleWhereUniqueInput!]
}

input DiscipleCreateOneWithout_departmentLeaderInput {
  create: DiscipleCreateWithout_departmentLeaderInput
  connect: DiscipleWhereUniqueInput
}

input DiscipleCreateWithout_departmentLeaderInput {
  fullname: String!
  firstName: String!
  lastName: String!
  _memberOf: DepartmentCreateOneWithout_disciplesInput!
}

input DiscipleCreateWithout_memberOfInput {
  fullname: String!
  firstName: String!
  lastName: String!
  _departmentLeader: DepartmentCreateOneWithout_leaderInput!
}

"""
An edge in a connection.
"""
type DiscipleEdge {
  """
  The item at the end of the edge.
  """
  node: Disciple!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum DiscipleOrderByInput {
  id_ASC
  id_DESC
  fullname_ASC
  fullname_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DisciplePreviousValues {
  id: ID!
  fullname: String!
  firstName: String!
  lastName: String!
}

type DiscipleSubscriptionPayload {
  mutation: MutationType!
  node: Disciple
  updatedFields: [String!]
  previousValues: DisciplePreviousValues
}

input DiscipleSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DiscipleSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DiscipleSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [DiscipleSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DiscipleWhereInput
}

input DiscipleUpdateInput {
  fullname: String
  firstName: String
  lastName: String
  _departmentLeader: DepartmentUpdateOneWithout_leaderInput
  _memberOf: DepartmentUpdateOneWithout_disciplesInput
}

input DiscipleUpdateManyWithout_memberOfInput {
  create: [DiscipleCreateWithout_memberOfInput!]
  connect: [DiscipleWhereUniqueInput!]
  disconnect: [DiscipleWhereUniqueInput!]
  delete: [DiscipleWhereUniqueInput!]
  update: [DiscipleUpdateWithWhereUniqueWithout_memberOfInput!]
  upsert: [DiscipleUpsertWithWhereUniqueWithout_memberOfInput!]
}

input DiscipleUpdateOneWithout_departmentLeaderInput {
  create: DiscipleCreateWithout_departmentLeaderInput
  connect: DiscipleWhereUniqueInput
  delete: Boolean
  update: DiscipleUpdateWithout_departmentLeaderDataInput
  upsert: DiscipleUpsertWithout_departmentLeaderInput
}

input DiscipleUpdateWithout_departmentLeaderDataInput {
  fullname: String
  firstName: String
  lastName: String
  _memberOf: DepartmentUpdateOneWithout_disciplesInput
}

input DiscipleUpdateWithout_memberOfDataInput {
  fullname: String
  firstName: String
  lastName: String
  _departmentLeader: DepartmentUpdateOneWithout_leaderInput
}

input DiscipleUpdateWithWhereUniqueWithout_memberOfInput {
  where: DiscipleWhereUniqueInput!
  data: DiscipleUpdateWithout_memberOfDataInput!
}

input DiscipleUpsertWithout_departmentLeaderInput {
  update: DiscipleUpdateWithout_departmentLeaderDataInput!
  create: DiscipleCreateWithout_departmentLeaderInput!
}

input DiscipleUpsertWithWhereUniqueWithout_memberOfInput {
  where: DiscipleWhereUniqueInput!
  update: DiscipleUpdateWithout_memberOfDataInput!
  create: DiscipleCreateWithout_memberOfInput!
}

input DiscipleWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DiscipleWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DiscipleWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [DiscipleWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  fullname: String
  """
  All values that are not equal to given value.
  """
  fullname_not: String
  """
  All values that are contained in given list.
  """
  fullname_in: [String!]
  """
  All values that are not contained in given list.
  """
  fullname_not_in: [String!]
  """
  All values less than the given value.
  """
  fullname_lt: String
  """
  All values less than or equal the given value.
  """
  fullname_lte: String
  """
  All values greater than the given value.
  """
  fullname_gt: String
  """
  All values greater than or equal the given value.
  """
  fullname_gte: String
  """
  All values containing the given string.
  """
  fullname_contains: String
  """
  All values not containing the given string.
  """
  fullname_not_contains: String
  """
  All values starting with the given string.
  """
  fullname_starts_with: String
  """
  All values not starting with the given string.
  """
  fullname_not_starts_with: String
  """
  All values ending with the given string.
  """
  fullname_ends_with: String
  """
  All values not ending with the given string.
  """
  fullname_not_ends_with: String
  firstName: String
  """
  All values that are not equal to given value.
  """
  firstName_not: String
  """
  All values that are contained in given list.
  """
  firstName_in: [String!]
  """
  All values that are not contained in given list.
  """
  firstName_not_in: [String!]
  """
  All values less than the given value.
  """
  firstName_lt: String
  """
  All values less than or equal the given value.
  """
  firstName_lte: String
  """
  All values greater than the given value.
  """
  firstName_gt: String
  """
  All values greater than or equal the given value.
  """
  firstName_gte: String
  """
  All values containing the given string.
  """
  firstName_contains: String
  """
  All values not containing the given string.
  """
  firstName_not_contains: String
  """
  All values starting with the given string.
  """
  firstName_starts_with: String
  """
  All values not starting with the given string.
  """
  firstName_not_starts_with: String
  """
  All values ending with the given string.
  """
  firstName_ends_with: String
  """
  All values not ending with the given string.
  """
  firstName_not_ends_with: String
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  _departmentLeader: DepartmentWhereInput
  _memberOf: DepartmentWhereInput
}

input DiscipleWhereUniqueInput {
  id: ID
  fullname: String
}

type Floor implements Node {
  id: ID!
  domain: String!
  name: String!
  _church(where: ChurchWhereInput): Church!
  _rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
}

"""
A connection to a list of items.
"""
type FloorConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [FloorEdge]!
  aggregate: AggregateFloor!
}

input FloorCreateInput {
  domain: String!
  name: String!
  _church: ChurchCreateOneWithout_floorsInput!
  _rooms: RoomCreateManyWithout_floorInput
}

input FloorCreateManyWithout_churchInput {
  create: [FloorCreateWithout_churchInput!]
  connect: [FloorWhereUniqueInput!]
}

input FloorCreateOneWithout_roomsInput {
  create: FloorCreateWithout_roomsInput
  connect: FloorWhereUniqueInput
}

input FloorCreateWithout_churchInput {
  domain: String!
  name: String!
  _rooms: RoomCreateManyWithout_floorInput
}

input FloorCreateWithout_roomsInput {
  domain: String!
  name: String!
  _church: ChurchCreateOneWithout_floorsInput!
}

"""
An edge in a connection.
"""
type FloorEdge {
  """
  The item at the end of the edge.
  """
  node: Floor!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum FloorOrderByInput {
  id_ASC
  id_DESC
  domain_ASC
  domain_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FloorPreviousValues {
  id: ID!
  domain: String!
  name: String!
}

type FloorSubscriptionPayload {
  mutation: MutationType!
  node: Floor
  updatedFields: [String!]
  previousValues: FloorPreviousValues
}

input FloorSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FloorSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FloorSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [FloorSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FloorWhereInput
}

input FloorUpdateInput {
  domain: String
  name: String
  _church: ChurchUpdateOneWithout_floorsInput
  _rooms: RoomUpdateManyWithout_floorInput
}

input FloorUpdateManyWithout_churchInput {
  create: [FloorCreateWithout_churchInput!]
  connect: [FloorWhereUniqueInput!]
  disconnect: [FloorWhereUniqueInput!]
  delete: [FloorWhereUniqueInput!]
  update: [FloorUpdateWithWhereUniqueWithout_churchInput!]
  upsert: [FloorUpsertWithWhereUniqueWithout_churchInput!]
}

input FloorUpdateOneWithout_roomsInput {
  create: FloorCreateWithout_roomsInput
  connect: FloorWhereUniqueInput
  delete: Boolean
  update: FloorUpdateWithout_roomsDataInput
  upsert: FloorUpsertWithout_roomsInput
}

input FloorUpdateWithout_churchDataInput {
  domain: String
  name: String
  _rooms: RoomUpdateManyWithout_floorInput
}

input FloorUpdateWithout_roomsDataInput {
  domain: String
  name: String
  _church: ChurchUpdateOneWithout_floorsInput
}

input FloorUpdateWithWhereUniqueWithout_churchInput {
  where: FloorWhereUniqueInput!
  data: FloorUpdateWithout_churchDataInput!
}

input FloorUpsertWithout_roomsInput {
  update: FloorUpdateWithout_roomsDataInput!
  create: FloorCreateWithout_roomsInput!
}

input FloorUpsertWithWhereUniqueWithout_churchInput {
  where: FloorWhereUniqueInput!
  update: FloorUpdateWithout_churchDataInput!
  create: FloorCreateWithout_churchInput!
}

input FloorWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FloorWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FloorWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [FloorWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  domain: String
  """
  All values that are not equal to given value.
  """
  domain_not: String
  """
  All values that are contained in given list.
  """
  domain_in: [String!]
  """
  All values that are not contained in given list.
  """
  domain_not_in: [String!]
  """
  All values less than the given value.
  """
  domain_lt: String
  """
  All values less than or equal the given value.
  """
  domain_lte: String
  """
  All values greater than the given value.
  """
  domain_gt: String
  """
  All values greater than or equal the given value.
  """
  domain_gte: String
  """
  All values containing the given string.
  """
  domain_contains: String
  """
  All values not containing the given string.
  """
  domain_not_contains: String
  """
  All values starting with the given string.
  """
  domain_starts_with: String
  """
  All values not starting with the given string.
  """
  domain_not_starts_with: String
  """
  All values ending with the given string.
  """
  domain_ends_with: String
  """
  All values not ending with the given string.
  """
  domain_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  _church: ChurchWhereInput
  _rooms_every: RoomWhereInput
  _rooms_some: RoomWhereInput
  _rooms_none: RoomWhereInput
}

input FloorWhereUniqueInput {
  id: ID
  domain: String
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

"""
A connection to a list of items.
"""
type PostConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""
An edge in a connection.
"""
type PostEdge {
  """
  The item at the end of the edge.
  """
  node: Post!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PostSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PostWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  isPublished: Boolean
  """
  All values that are not equal to given value.
  """
  isPublished_not: Boolean
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Room implements Node {
  id: ID!
  domain: String!
  name: String!
  _floor(where: FloorWhereInput): Floor!
  _departments(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Department!]
}

"""
A connection to a list of items.
"""
type RoomConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  domain: String!
  name: String!
  _floor: FloorCreateOneWithout_roomsInput!
  _departments: DepartmentCreateManyWithout_roomsInput
}

input RoomCreateManyWithout_departmentsInput {
  create: [RoomCreateWithout_departmentsInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateManyWithout_floorInput {
  create: [RoomCreateWithout_floorInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateWithout_departmentsInput {
  domain: String!
  name: String!
  _floor: FloorCreateOneWithout_roomsInput!
}

input RoomCreateWithout_floorInput {
  domain: String!
  name: String!
  _departments: DepartmentCreateManyWithout_roomsInput
}

"""
An edge in a connection.
"""
type RoomEdge {
  """
  The item at the end of the edge.
  """
  node: Room!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  domain_ASC
  domain_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RoomPreviousValues {
  id: ID!
  domain: String!
  name: String!
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [RoomSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [RoomSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [RoomSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
}

input RoomUpdateInput {
  domain: String
  name: String
  _floor: FloorUpdateOneWithout_roomsInput
  _departments: DepartmentUpdateManyWithout_roomsInput
}

input RoomUpdateManyWithout_departmentsInput {
  create: [RoomCreateWithout_departmentsInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  delete: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithout_departmentsInput!]
  upsert: [RoomUpsertWithWhereUniqueWithout_departmentsInput!]
}

input RoomUpdateManyWithout_floorInput {
  create: [RoomCreateWithout_floorInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  delete: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithout_floorInput!]
  upsert: [RoomUpsertWithWhereUniqueWithout_floorInput!]
}

input RoomUpdateWithout_departmentsDataInput {
  domain: String
  name: String
  _floor: FloorUpdateOneWithout_roomsInput
}

input RoomUpdateWithout_floorDataInput {
  domain: String
  name: String
  _departments: DepartmentUpdateManyWithout_roomsInput
}

input RoomUpdateWithWhereUniqueWithout_departmentsInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithout_departmentsDataInput!
}

input RoomUpdateWithWhereUniqueWithout_floorInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithout_floorDataInput!
}

input RoomUpsertWithWhereUniqueWithout_departmentsInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithout_departmentsDataInput!
  create: RoomCreateWithout_departmentsInput!
}

input RoomUpsertWithWhereUniqueWithout_floorInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithout_floorDataInput!
  create: RoomCreateWithout_floorInput!
}

input RoomWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [RoomWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [RoomWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [RoomWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  domain: String
  """
  All values that are not equal to given value.
  """
  domain_not: String
  """
  All values that are contained in given list.
  """
  domain_in: [String!]
  """
  All values that are not contained in given list.
  """
  domain_not_in: [String!]
  """
  All values less than the given value.
  """
  domain_lt: String
  """
  All values less than or equal the given value.
  """
  domain_lte: String
  """
  All values greater than the given value.
  """
  domain_gt: String
  """
  All values greater than or equal the given value.
  """
  domain_gte: String
  """
  All values containing the given string.
  """
  domain_contains: String
  """
  All values not containing the given string.
  """
  domain_not_contains: String
  """
  All values starting with the given string.
  """
  domain_starts_with: String
  """
  All values not starting with the given string.
  """
  domain_not_starts_with: String
  """
  All values ending with the given string.
  """
  domain_ends_with: String
  """
  All values not ending with the given string.
  """
  domain_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  _floor: FloorWhereInput
  _departments_every: DepartmentWhereInput
  _departments_some: DepartmentWhereInput
  _departments_none: DepartmentWhereInput
}

input RoomWhereUniqueInput {
  id: ID
  domain: String
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createChurch(data: ChurchCreateInput!): Church!
  createFloor(data: FloorCreateInput!): Floor!
  createRoom(data: RoomCreateInput!): Room!
  createDepartment(data: DepartmentCreateInput!): Department!
  createDisciple(data: DiscipleCreateInput!): Disciple!
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  updateChurch(data: ChurchUpdateInput!, where: ChurchWhereUniqueInput!): Church
  updateFloor(data: FloorUpdateInput!, where: FloorWhereUniqueInput!): Floor
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateDepartment(data: DepartmentUpdateInput!, where: DepartmentWhereUniqueInput!): Department
  updateDisciple(data: DiscipleUpdateInput!, where: DiscipleWhereUniqueInput!): Disciple
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteChurch(where: ChurchWhereUniqueInput!): Church
  deleteFloor(where: FloorWhereUniqueInput!): Floor
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteDepartment(where: DepartmentWhereUniqueInput!): Department
  deleteDisciple(where: DiscipleWhereUniqueInput!): Disciple
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  upsertChurch(where: ChurchWhereUniqueInput!, create: ChurchCreateInput!, update: ChurchUpdateInput!): Church!
  upsertFloor(where: FloorWhereUniqueInput!, create: FloorCreateInput!, update: FloorUpdateInput!): Floor!
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  upsertDepartment(where: DepartmentWhereUniqueInput!, create: DepartmentCreateInput!, update: DepartmentUpdateInput!): Department!
  upsertDisciple(where: DiscipleWhereUniqueInput!, create: DiscipleCreateInput!, update: DiscipleUpdateInput!): Disciple!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyChurches(data: ChurchUpdateInput!, where: ChurchWhereInput): BatchPayload!
  updateManyFloors(data: FloorUpdateInput!, where: FloorWhereInput): BatchPayload!
  updateManyRooms(data: RoomUpdateInput!, where: RoomWhereInput): BatchPayload!
  updateManyDepartments(data: DepartmentUpdateInput!, where: DepartmentWhereInput): BatchPayload!
  updateManyDisciples(data: DiscipleUpdateInput!, where: DiscipleWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyChurches(where: ChurchWhereInput): BatchPayload!
  deleteManyFloors(where: FloorWhereInput): BatchPayload!
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  deleteManyDepartments(where: DepartmentWhereInput): BatchPayload!
  deleteManyDisciples(where: DiscipleWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

type Query {
  churches(where: ChurchWhereInput, orderBy: ChurchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Church]!
  floors(where: FloorWhereInput, orderBy: FloorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Floor]!
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  departments(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Department]!
  disciples(where: DiscipleWhereInput, orderBy: DiscipleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Disciple]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  church(where: ChurchWhereUniqueInput!): Church
  floor(where: FloorWhereUniqueInput!): Floor
  room(where: RoomWhereUniqueInput!): Room
  department(where: DepartmentWhereUniqueInput!): Department
  disciple(where: DiscipleWhereUniqueInput!): Disciple
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  churchesConnection(where: ChurchWhereInput, orderBy: ChurchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChurchConnection!
  floorsConnection(where: FloorWhereInput, orderBy: FloorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FloorConnection!
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  departmentsConnection(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DepartmentConnection!
  disciplesConnection(where: DiscipleWhereInput, orderBy: DiscipleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DiscipleConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  church(where: ChurchSubscriptionWhereInput): ChurchSubscriptionPayload
  floor(where: FloorSubscriptionWhereInput): FloorSubscriptionPayload
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  department(where: DepartmentSubscriptionWhereInput): DepartmentSubscriptionPayload
  disciple(where: DiscipleSubscriptionWhereInput): DiscipleSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}
`

export type FloorOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'domain_ASC' |
  'domain_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RoomOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'domain_ASC' |
  'domain_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ChurchOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'domain_ASC' |
  'domain_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DepartmentOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'domain_ASC' |
  'domain_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DiscipleOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'fullname_ASC' |
  'fullname_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface DiscipleCreateInput {
  fullname: String
  firstName: String
  lastName: String
  _departmentLeader: DepartmentCreateOneWithout_leaderInput
  _memberOf: DepartmentCreateOneWithout_disciplesInput
}

export interface ChurchWhereInput {
  AND?: ChurchWhereInput[] | ChurchWhereInput
  OR?: ChurchWhereInput[] | ChurchWhereInput
  NOT?: ChurchWhereInput[] | ChurchWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  domain?: String
  domain_not?: String
  domain_in?: String[] | String
  domain_not_in?: String[] | String
  domain_lt?: String
  domain_lte?: String
  domain_gt?: String
  domain_gte?: String
  domain_contains?: String
  domain_not_contains?: String
  domain_starts_with?: String
  domain_not_starts_with?: String
  domain_ends_with?: String
  domain_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  _floors_every?: FloorWhereInput
  _floors_some?: FloorWhereInput
  _floors_none?: FloorWhereInput
}

export interface RoomCreateWithout_floorInput {
  domain: String
  name: String
  _departments?: DepartmentCreateManyWithout_roomsInput
}

export interface FloorUpsertWithout_roomsInput {
  update: FloorUpdateWithout_roomsDataInput
  create: FloorCreateWithout_roomsInput
}

export interface DepartmentCreateManyWithout_roomsInput {
  create?: DepartmentCreateWithout_roomsInput[] | DepartmentCreateWithout_roomsInput
  connect?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface DepartmentCreateWithout_roomsInput {
  domain: String
  _leader: DiscipleCreateOneWithout_departmentLeaderInput
  _disciples?: DiscipleCreateManyWithout_memberOfInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface DiscipleCreateOneWithout_departmentLeaderInput {
  create?: DiscipleCreateWithout_departmentLeaderInput
  connect?: DiscipleWhereUniqueInput
}

export interface DiscipleWhereInput {
  AND?: DiscipleWhereInput[] | DiscipleWhereInput
  OR?: DiscipleWhereInput[] | DiscipleWhereInput
  NOT?: DiscipleWhereInput[] | DiscipleWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  fullname?: String
  fullname_not?: String
  fullname_in?: String[] | String
  fullname_not_in?: String[] | String
  fullname_lt?: String
  fullname_lte?: String
  fullname_gt?: String
  fullname_gte?: String
  fullname_contains?: String
  fullname_not_contains?: String
  fullname_starts_with?: String
  fullname_not_starts_with?: String
  fullname_ends_with?: String
  fullname_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  _departmentLeader?: DepartmentWhereInput
  _memberOf?: DepartmentWhereInput
}

export interface DiscipleCreateWithout_departmentLeaderInput {
  fullname: String
  firstName: String
  lastName: String
  _memberOf: DepartmentCreateOneWithout_disciplesInput
}

export interface RoomSubscriptionWhereInput {
  AND?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  OR?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  NOT?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RoomWhereInput
}

export interface DepartmentCreateOneWithout_disciplesInput {
  create?: DepartmentCreateWithout_disciplesInput
  connect?: DepartmentWhereUniqueInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface DepartmentCreateWithout_disciplesInput {
  domain: String
  _leader: DiscipleCreateOneWithout_departmentLeaderInput
  _rooms?: RoomCreateManyWithout_departmentsInput
}

export interface ChurchSubscriptionWhereInput {
  AND?: ChurchSubscriptionWhereInput[] | ChurchSubscriptionWhereInput
  OR?: ChurchSubscriptionWhereInput[] | ChurchSubscriptionWhereInput
  NOT?: ChurchSubscriptionWhereInput[] | ChurchSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChurchWhereInput
}

export interface RoomCreateManyWithout_departmentsInput {
  create?: RoomCreateWithout_departmentsInput[] | RoomCreateWithout_departmentsInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
}

export interface RoomWhereInput {
  AND?: RoomWhereInput[] | RoomWhereInput
  OR?: RoomWhereInput[] | RoomWhereInput
  NOT?: RoomWhereInput[] | RoomWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  domain?: String
  domain_not?: String
  domain_in?: String[] | String
  domain_not_in?: String[] | String
  domain_lt?: String
  domain_lte?: String
  domain_gt?: String
  domain_gte?: String
  domain_contains?: String
  domain_not_contains?: String
  domain_starts_with?: String
  domain_not_starts_with?: String
  domain_ends_with?: String
  domain_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  _floor?: FloorWhereInput
  _departments_every?: DepartmentWhereInput
  _departments_some?: DepartmentWhereInput
  _departments_none?: DepartmentWhereInput
}

export interface RoomCreateWithout_departmentsInput {
  domain: String
  name: String
  _floor: FloorCreateOneWithout_roomsInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface FloorCreateOneWithout_roomsInput {
  create?: FloorCreateWithout_roomsInput
  connect?: FloorWhereUniqueInput
}

export interface ChurchWhereUniqueInput {
  id?: ID_Input
  domain?: String
}

export interface FloorCreateWithout_roomsInput {
  domain: String
  name: String
  _church: ChurchCreateOneWithout_floorsInput
}

export interface RoomWhereUniqueInput {
  id?: ID_Input
  domain?: String
}

export interface ChurchCreateOneWithout_floorsInput {
  create?: ChurchCreateWithout_floorsInput
  connect?: ChurchWhereUniqueInput
}

export interface DiscipleWhereUniqueInput {
  id?: ID_Input
  fullname?: String
}

export interface ChurchCreateWithout_floorsInput {
  domain: String
  name: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface DiscipleCreateManyWithout_memberOfInput {
  create?: DiscipleCreateWithout_memberOfInput[] | DiscipleCreateWithout_memberOfInput
  connect?: DiscipleWhereUniqueInput[] | DiscipleWhereUniqueInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface DiscipleCreateWithout_memberOfInput {
  fullname: String
  firstName: String
  lastName: String
  _departmentLeader: DepartmentCreateOneWithout_leaderInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface DepartmentCreateOneWithout_leaderInput {
  create?: DepartmentCreateWithout_leaderInput
  connect?: DepartmentWhereUniqueInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface DepartmentCreateWithout_leaderInput {
  domain: String
  _rooms?: RoomCreateManyWithout_departmentsInput
  _disciples?: DiscipleCreateManyWithout_memberOfInput
}

export interface DiscipleUpdateInput {
  fullname?: String
  firstName?: String
  lastName?: String
  _departmentLeader?: DepartmentUpdateOneWithout_leaderInput
  _memberOf?: DepartmentUpdateOneWithout_disciplesInput
}

export interface FloorCreateInput {
  domain: String
  name: String
  _church: ChurchCreateOneWithout_floorsInput
  _rooms?: RoomCreateManyWithout_floorInput
}

export interface RoomUpdateInput {
  domain?: String
  name?: String
  _floor?: FloorUpdateOneWithout_roomsInput
  _departments?: DepartmentUpdateManyWithout_roomsInput
}

export interface RoomCreateInput {
  domain: String
  name: String
  _floor: FloorCreateOneWithout_roomsInput
  _departments?: DepartmentCreateManyWithout_roomsInput
}

export interface FloorUpsertWithWhereUniqueWithout_churchInput {
  where: FloorWhereUniqueInput
  update: FloorUpdateWithout_churchDataInput
  create: FloorCreateWithout_churchInput
}

export interface DepartmentCreateInput {
  domain: String
  _leader: DiscipleCreateOneWithout_departmentLeaderInput
  _rooms?: RoomCreateManyWithout_departmentsInput
  _disciples?: DiscipleCreateManyWithout_memberOfInput
}

export interface DepartmentUpsertWithWhereUniqueWithout_roomsInput {
  where: DepartmentWhereUniqueInput
  update: DepartmentUpdateWithout_roomsDataInput
  create: DepartmentCreateWithout_roomsInput
}

export interface DepartmentUpsertWithout_disciplesInput {
  update: DepartmentUpdateWithout_disciplesDataInput
  create: DepartmentCreateWithout_disciplesInput
}

export interface DepartmentUpsertWithout_leaderInput {
  update: DepartmentUpdateWithout_leaderDataInput
  create: DepartmentCreateWithout_leaderInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface DepartmentUpdateOneWithout_leaderInput {
  create?: DepartmentCreateWithout_leaderInput
  connect?: DepartmentWhereUniqueInput
  delete?: Boolean
  update?: DepartmentUpdateWithout_leaderDataInput
  upsert?: DepartmentUpsertWithout_leaderInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface DiscipleUpdateWithWhereUniqueWithout_memberOfInput {
  where: DiscipleWhereUniqueInput
  data: DiscipleUpdateWithout_memberOfDataInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  name: String
}

export interface DiscipleUpsertWithout_departmentLeaderInput {
  update: DiscipleUpdateWithout_departmentLeaderDataInput
  create: DiscipleCreateWithout_departmentLeaderInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
}

export interface FloorCreateManyWithout_churchInput {
  create?: FloorCreateWithout_churchInput[] | FloorCreateWithout_churchInput
  connect?: FloorWhereUniqueInput[] | FloorWhereUniqueInput
}

export interface RoomUpsertWithWhereUniqueWithout_departmentsInput {
  where: RoomWhereUniqueInput
  update: RoomUpdateWithout_departmentsDataInput
  create: RoomCreateWithout_departmentsInput
}

export interface RoomCreateManyWithout_floorInput {
  create?: RoomCreateWithout_floorInput[] | RoomCreateWithout_floorInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface DiscipleSubscriptionWhereInput {
  AND?: DiscipleSubscriptionWhereInput[] | DiscipleSubscriptionWhereInput
  OR?: DiscipleSubscriptionWhereInput[] | DiscipleSubscriptionWhereInput
  NOT?: DiscipleSubscriptionWhereInput[] | DiscipleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DiscipleWhereInput
}

export interface ChurchUpdateInput {
  domain?: String
  name?: String
  _floors?: FloorUpdateManyWithout_churchInput
}

export interface DepartmentWhereInput {
  AND?: DepartmentWhereInput[] | DepartmentWhereInput
  OR?: DepartmentWhereInput[] | DepartmentWhereInput
  NOT?: DepartmentWhereInput[] | DepartmentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  domain?: String
  domain_not?: String
  domain_in?: String[] | String
  domain_not_in?: String[] | String
  domain_lt?: String
  domain_lte?: String
  domain_gt?: String
  domain_gte?: String
  domain_contains?: String
  domain_not_contains?: String
  domain_starts_with?: String
  domain_not_starts_with?: String
  domain_ends_with?: String
  domain_not_ends_with?: String
  _leader?: DiscipleWhereInput
  _rooms_every?: RoomWhereInput
  _rooms_some?: RoomWhereInput
  _rooms_none?: RoomWhereInput
  _disciples_every?: DiscipleWhereInput
  _disciples_some?: DiscipleWhereInput
  _disciples_none?: DiscipleWhereInput
}

export interface FloorUpdateManyWithout_churchInput {
  create?: FloorCreateWithout_churchInput[] | FloorCreateWithout_churchInput
  connect?: FloorWhereUniqueInput[] | FloorWhereUniqueInput
  disconnect?: FloorWhereUniqueInput[] | FloorWhereUniqueInput
  delete?: FloorWhereUniqueInput[] | FloorWhereUniqueInput
  update?: FloorUpdateWithWhereUniqueWithout_churchInput[] | FloorUpdateWithWhereUniqueWithout_churchInput
  upsert?: FloorUpsertWithWhereUniqueWithout_churchInput[] | FloorUpsertWithWhereUniqueWithout_churchInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface FloorUpdateWithWhereUniqueWithout_churchInput {
  where: FloorWhereUniqueInput
  data: FloorUpdateWithout_churchDataInput
}

export interface FloorWhereInput {
  AND?: FloorWhereInput[] | FloorWhereInput
  OR?: FloorWhereInput[] | FloorWhereInput
  NOT?: FloorWhereInput[] | FloorWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  domain?: String
  domain_not?: String
  domain_in?: String[] | String
  domain_not_in?: String[] | String
  domain_lt?: String
  domain_lte?: String
  domain_gt?: String
  domain_gte?: String
  domain_contains?: String
  domain_not_contains?: String
  domain_starts_with?: String
  domain_not_starts_with?: String
  domain_ends_with?: String
  domain_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  _church?: ChurchWhereInput
  _rooms_every?: RoomWhereInput
  _rooms_some?: RoomWhereInput
  _rooms_none?: RoomWhereInput
}

export interface FloorUpdateWithout_churchDataInput {
  domain?: String
  name?: String
  _rooms?: RoomUpdateManyWithout_floorInput
}

export interface DepartmentWhereUniqueInput {
  id?: ID_Input
  domain?: String
}

export interface RoomUpdateManyWithout_floorInput {
  create?: RoomCreateWithout_floorInput[] | RoomCreateWithout_floorInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  disconnect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  delete?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  update?: RoomUpdateWithWhereUniqueWithout_floorInput[] | RoomUpdateWithWhereUniqueWithout_floorInput
  upsert?: RoomUpsertWithWhereUniqueWithout_floorInput[] | RoomUpsertWithWhereUniqueWithout_floorInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface RoomUpdateWithWhereUniqueWithout_floorInput {
  where: RoomWhereUniqueInput
  data: RoomUpdateWithout_floorDataInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  name?: String
}

export interface RoomUpdateWithout_floorDataInput {
  domain?: String
  name?: String
  _departments?: DepartmentUpdateManyWithout_roomsInput
}

export interface DepartmentUpdateInput {
  domain?: String
  _leader?: DiscipleUpdateOneWithout_departmentLeaderInput
  _rooms?: RoomUpdateManyWithout_departmentsInput
  _disciples?: DiscipleUpdateManyWithout_memberOfInput
}

export interface DepartmentUpdateManyWithout_roomsInput {
  create?: DepartmentCreateWithout_roomsInput[] | DepartmentCreateWithout_roomsInput
  connect?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
  disconnect?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
  delete?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
  update?: DepartmentUpdateWithWhereUniqueWithout_roomsInput[] | DepartmentUpdateWithWhereUniqueWithout_roomsInput
  upsert?: DepartmentUpsertWithWhereUniqueWithout_roomsInput[] | DepartmentUpsertWithWhereUniqueWithout_roomsInput
}

export interface RoomUpsertWithWhereUniqueWithout_floorInput {
  where: RoomWhereUniqueInput
  update: RoomUpdateWithout_floorDataInput
  create: RoomCreateWithout_floorInput
}

export interface DepartmentUpdateWithWhereUniqueWithout_roomsInput {
  where: DepartmentWhereUniqueInput
  data: DepartmentUpdateWithout_roomsDataInput
}

export interface DepartmentUpdateWithout_leaderDataInput {
  domain?: String
  _rooms?: RoomUpdateManyWithout_departmentsInput
  _disciples?: DiscipleUpdateManyWithout_memberOfInput
}

export interface DepartmentUpdateWithout_roomsDataInput {
  domain?: String
  _leader?: DiscipleUpdateOneWithout_departmentLeaderInput
  _disciples?: DiscipleUpdateManyWithout_memberOfInput
}

export interface DiscipleUpdateManyWithout_memberOfInput {
  create?: DiscipleCreateWithout_memberOfInput[] | DiscipleCreateWithout_memberOfInput
  connect?: DiscipleWhereUniqueInput[] | DiscipleWhereUniqueInput
  disconnect?: DiscipleWhereUniqueInput[] | DiscipleWhereUniqueInput
  delete?: DiscipleWhereUniqueInput[] | DiscipleWhereUniqueInput
  update?: DiscipleUpdateWithWhereUniqueWithout_memberOfInput[] | DiscipleUpdateWithWhereUniqueWithout_memberOfInput
  upsert?: DiscipleUpsertWithWhereUniqueWithout_memberOfInput[] | DiscipleUpsertWithWhereUniqueWithout_memberOfInput
}

export interface DiscipleUpdateOneWithout_departmentLeaderInput {
  create?: DiscipleCreateWithout_departmentLeaderInput
  connect?: DiscipleWhereUniqueInput
  delete?: Boolean
  update?: DiscipleUpdateWithout_departmentLeaderDataInput
  upsert?: DiscipleUpsertWithout_departmentLeaderInput
}

export interface FloorCreateWithout_churchInput {
  domain: String
  name: String
  _rooms?: RoomCreateManyWithout_floorInput
}

export interface DiscipleUpdateWithout_departmentLeaderDataInput {
  fullname?: String
  firstName?: String
  lastName?: String
  _memberOf?: DepartmentUpdateOneWithout_disciplesInput
}

export interface DepartmentSubscriptionWhereInput {
  AND?: DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  OR?: DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  NOT?: DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DepartmentWhereInput
}

export interface DepartmentUpdateOneWithout_disciplesInput {
  create?: DepartmentCreateWithout_disciplesInput
  connect?: DepartmentWhereUniqueInput
  delete?: Boolean
  update?: DepartmentUpdateWithout_disciplesDataInput
  upsert?: DepartmentUpsertWithout_disciplesInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface DepartmentUpdateWithout_disciplesDataInput {
  domain?: String
  _leader?: DiscipleUpdateOneWithout_departmentLeaderInput
  _rooms?: RoomUpdateManyWithout_departmentsInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface RoomUpdateManyWithout_departmentsInput {
  create?: RoomCreateWithout_departmentsInput[] | RoomCreateWithout_departmentsInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  disconnect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  delete?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  update?: RoomUpdateWithWhereUniqueWithout_departmentsInput[] | RoomUpdateWithWhereUniqueWithout_departmentsInput
  upsert?: RoomUpsertWithWhereUniqueWithout_departmentsInput[] | RoomUpsertWithWhereUniqueWithout_departmentsInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneWithoutPostsInput
}

export interface RoomUpdateWithWhereUniqueWithout_departmentsInput {
  where: RoomWhereUniqueInput
  data: RoomUpdateWithout_departmentsDataInput
}

export interface DiscipleUpsertWithWhereUniqueWithout_memberOfInput {
  where: DiscipleWhereUniqueInput
  update: DiscipleUpdateWithout_memberOfDataInput
  create: DiscipleCreateWithout_memberOfInput
}

export interface RoomUpdateWithout_departmentsDataInput {
  domain?: String
  name?: String
  _floor?: FloorUpdateOneWithout_roomsInput
}

export interface ChurchCreateInput {
  domain: String
  name: String
  _floors?: FloorCreateManyWithout_churchInput
}

export interface FloorUpdateOneWithout_roomsInput {
  create?: FloorCreateWithout_roomsInput
  connect?: FloorWhereUniqueInput
  delete?: Boolean
  update?: FloorUpdateWithout_roomsDataInput
  upsert?: FloorUpsertWithout_roomsInput
}

export interface FloorSubscriptionWhereInput {
  AND?: FloorSubscriptionWhereInput[] | FloorSubscriptionWhereInput
  OR?: FloorSubscriptionWhereInput[] | FloorSubscriptionWhereInput
  NOT?: FloorSubscriptionWhereInput[] | FloorSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FloorWhereInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface ChurchUpsertWithout_floorsInput {
  update: ChurchUpdateWithout_floorsDataInput
  create: ChurchCreateWithout_floorsInput
}

export interface ChurchUpdateWithout_floorsDataInput {
  domain?: String
  name?: String
}

export interface ChurchUpdateOneWithout_floorsInput {
  create?: ChurchCreateWithout_floorsInput
  connect?: ChurchWhereUniqueInput
  delete?: Boolean
  update?: ChurchUpdateWithout_floorsDataInput
  upsert?: ChurchUpsertWithout_floorsInput
}

export interface FloorUpdateWithout_roomsDataInput {
  domain?: String
  name?: String
  _church?: ChurchUpdateOneWithout_floorsInput
}

export interface FloorUpdateInput {
  domain?: String
  name?: String
  _church?: ChurchUpdateOneWithout_floorsInput
  _rooms?: RoomUpdateManyWithout_floorInput
}

export interface FloorWhereUniqueInput {
  id?: ID_Input
  domain?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface DiscipleUpdateWithout_memberOfDataInput {
  fullname?: String
  firstName?: String
  lastName?: String
  _departmentLeader?: DepartmentUpdateOneWithout_leaderInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

export interface BatchPayload {
  count: Long
}

export interface Church extends Node {
  id: ID_Output
  domain: String
  name: String
  _floors?: Floor[]
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface AggregatePost {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

/*
 * An edge in a connection.

 */
export interface DiscipleEdge {
  node: Disciple
  cursor: String
}

export interface Floor extends Node {
  id: ID_Output
  domain: String
  name: String
  _church: Church
  _rooms?: Room[]
}

export interface AggregateDepartment {
  count: Int
}

export interface ChurchSubscriptionPayload {
  mutation: MutationType
  node?: Church
  updatedFields?: String[]
  previousValues?: ChurchPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface DepartmentConnection {
  pageInfo: PageInfo
  edges: DepartmentEdge[]
  aggregate: AggregateDepartment
}

export interface ChurchPreviousValues {
  id: ID_Output
  domain: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface RoomEdge {
  node: Room
  cursor: String
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

export interface AggregateFloor {
  count: Int
}

export interface FloorSubscriptionPayload {
  mutation: MutationType
  node?: Floor
  updatedFields?: String[]
  previousValues?: FloorPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface FloorConnection {
  pageInfo: PageInfo
  edges: FloorEdge[]
  aggregate: AggregateFloor
}

export interface FloorPreviousValues {
  id: ID_Output
  domain: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface ChurchEdge {
  node: Church
  cursor: String
}

export interface Disciple extends Node {
  id: ID_Output
  fullname: String
  firstName: String
  lastName: String
  _departmentLeader: Department
  _memberOf: Department
}

/*
 * A connection to a list of items.

 */
export interface ChurchConnection {
  pageInfo: PageInfo
  edges: ChurchEdge[]
  aggregate: AggregateChurch
}

export interface RoomSubscriptionPayload {
  mutation: MutationType
  node?: Room
  updatedFields?: String[]
  previousValues?: RoomPreviousValues
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface RoomPreviousValues {
  id: ID_Output
  domain: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface DiscipleConnection {
  pageInfo: PageInfo
  edges: DiscipleEdge[]
  aggregate: AggregateDisciple
}

export interface Department extends Node {
  id: ID_Output
  domain: String
  _leader: Disciple
  _rooms?: Room[]
  _disciples?: Disciple[]
}

export interface AggregateRoom {
  count: Int
}

export interface DepartmentSubscriptionPayload {
  mutation: MutationType
  node?: Department
  updatedFields?: String[]
  previousValues?: DepartmentPreviousValues
}

/*
 * An edge in a connection.

 */
export interface FloorEdge {
  node: Floor
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface DisciplePreviousValues {
  id: ID_Output
  fullname: String
  firstName: String
  lastName: String
}

export interface DiscipleSubscriptionPayload {
  mutation: MutationType
  node?: Disciple
  updatedFields?: String[]
  previousValues?: DisciplePreviousValues
}

export interface Room extends Node {
  id: ID_Output
  domain: String
  name: String
  _floor: Floor
  _departments?: Department[]
}

export interface DepartmentPreviousValues {
  id: ID_Output
  domain: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  posts?: Post[]
}

export interface AggregateChurch {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface RoomConnection {
  pageInfo: PageInfo
  edges: RoomEdge[]
  aggregate: AggregateRoom
}

/*
 * An edge in a connection.

 */
export interface DepartmentEdge {
  node: Department
  cursor: String
}

export interface AggregateDisciple {
  count: Int
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  churches: (args: { where?: ChurchWhereInput, orderBy?: ChurchOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Church[]>
  floors: (args: { where?: FloorWhereInput, orderBy?: FloorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Floor[]>
  rooms: (args: { where?: RoomWhereInput, orderBy?: RoomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Room[]>
  departments: (args: { where?: DepartmentWhereInput, orderBy?: DepartmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Department[]>
  disciples: (args: { where?: DiscipleWhereInput, orderBy?: DiscipleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Disciple[]>
  posts: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Post[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  church: (args: { where: ChurchWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Church | null>
  floor: (args: { where: FloorWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Floor | null>
  room: (args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Room | null>
  department: (args: { where: DepartmentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Department | null>
  disciple: (args: { where: DiscipleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Disciple | null>
  post: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  churchesConnection: (args: { where?: ChurchWhereInput, orderBy?: ChurchOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ChurchConnection>
  floorsConnection: (args: { where?: FloorWhereInput, orderBy?: FloorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<FloorConnection>
  roomsConnection: (args: { where?: RoomWhereInput, orderBy?: RoomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<RoomConnection>
  departmentsConnection: (args: { where?: DepartmentWhereInput, orderBy?: DepartmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<DepartmentConnection>
  disciplesConnection: (args: { where?: DiscipleWhereInput, orderBy?: DiscipleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<DiscipleConnection>
  postsConnection: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createChurch: (args: { data: ChurchCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Church>
  createFloor: (args: { data: FloorCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Floor>
  createRoom: (args: { data: RoomCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Room>
  createDepartment: (args: { data: DepartmentCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Department>
  createDisciple: (args: { data: DiscipleCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Disciple>
  createPost: (args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateChurch: (args: { data: ChurchUpdateInput, where: ChurchWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Church | null>
  updateFloor: (args: { data: FloorUpdateInput, where: FloorWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Floor | null>
  updateRoom: (args: { data: RoomUpdateInput, where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Room | null>
  updateDepartment: (args: { data: DepartmentUpdateInput, where: DepartmentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Department | null>
  updateDisciple: (args: { data: DiscipleUpdateInput, where: DiscipleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Disciple | null>
  updatePost: (args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteChurch: (args: { where: ChurchWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Church | null>
  deleteFloor: (args: { where: FloorWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Floor | null>
  deleteRoom: (args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Room | null>
  deleteDepartment: (args: { where: DepartmentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Department | null>
  deleteDisciple: (args: { where: DiscipleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Disciple | null>
  deletePost: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  upsertChurch: (args: { where: ChurchWhereUniqueInput, create: ChurchCreateInput, update: ChurchUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Church>
  upsertFloor: (args: { where: FloorWhereUniqueInput, create: FloorCreateInput, update: FloorUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Floor>
  upsertRoom: (args: { where: RoomWhereUniqueInput, create: RoomCreateInput, update: RoomUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Room>
  upsertDepartment: (args: { where: DepartmentWhereUniqueInput, create: DepartmentCreateInput, update: DepartmentUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Department>
  upsertDisciple: (args: { where: DiscipleWhereUniqueInput, create: DiscipleCreateInput, update: DiscipleUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Disciple>
  upsertPost: (args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateManyChurches: (args: { data: ChurchUpdateInput, where?: ChurchWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyFloors: (args: { data: FloorUpdateInput, where?: FloorWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyRooms: (args: { data: RoomUpdateInput, where?: RoomWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyDepartments: (args: { data: DepartmentUpdateInput, where?: DepartmentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyDisciples: (args: { data: DiscipleUpdateInput, where?: DiscipleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPosts: (args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyChurches: (args: { where?: ChurchWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyFloors: (args: { where?: FloorWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyRooms: (args: { where?: RoomWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyDepartments: (args: { where?: DepartmentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyDisciples: (args: { where?: DiscipleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPosts: (args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  church: (args: { where?: ChurchSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ChurchSubscriptionPayload>>
  floor: (args: { where?: FloorSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<FloorSubscriptionPayload>>
  room: (args: { where?: RoomSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<RoomSubscriptionPayload>>
  department: (args: { where?: DepartmentSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<DepartmentSubscriptionPayload>>
  disciple: (args: { where?: DiscipleSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<DiscipleSubscriptionPayload>>
  post: (args: { where?: PostSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PostSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Church: (where: ChurchWhereInput): Promise<boolean> => super.existsDelegate('query', 'churches', { where }, {}, '{ id }'),
    Floor: (where: FloorWhereInput): Promise<boolean> => super.existsDelegate('query', 'floors', { where }, {}, '{ id }'),
    Room: (where: RoomWhereInput): Promise<boolean> => super.existsDelegate('query', 'rooms', { where }, {}, '{ id }'),
    Department: (where: DepartmentWhereInput): Promise<boolean> => super.existsDelegate('query', 'departments', { where }, {}, '{ id }'),
    Disciple: (where: DiscipleWhereInput): Promise<boolean> => super.existsDelegate('query', 'disciples', { where }, {}, '{ id }'),
    Post: (where: PostWhereInput): Promise<boolean> => super.existsDelegate('query', 'posts', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }')
  }

  query: Query = {
    churches: (args, info): Promise<Church[]> => super.delegate('query', 'churches', args, {}, info),
    floors: (args, info): Promise<Floor[]> => super.delegate('query', 'floors', args, {}, info),
    rooms: (args, info): Promise<Room[]> => super.delegate('query', 'rooms', args, {}, info),
    departments: (args, info): Promise<Department[]> => super.delegate('query', 'departments', args, {}, info),
    disciples: (args, info): Promise<Disciple[]> => super.delegate('query', 'disciples', args, {}, info),
    posts: (args, info): Promise<Post[]> => super.delegate('query', 'posts', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    church: (args, info): Promise<Church | null> => super.delegate('query', 'church', args, {}, info),
    floor: (args, info): Promise<Floor | null> => super.delegate('query', 'floor', args, {}, info),
    room: (args, info): Promise<Room | null> => super.delegate('query', 'room', args, {}, info),
    department: (args, info): Promise<Department | null> => super.delegate('query', 'department', args, {}, info),
    disciple: (args, info): Promise<Disciple | null> => super.delegate('query', 'disciple', args, {}, info),
    post: (args, info): Promise<Post | null> => super.delegate('query', 'post', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    churchesConnection: (args, info): Promise<ChurchConnection> => super.delegate('query', 'churchesConnection', args, {}, info),
    floorsConnection: (args, info): Promise<FloorConnection> => super.delegate('query', 'floorsConnection', args, {}, info),
    roomsConnection: (args, info): Promise<RoomConnection> => super.delegate('query', 'roomsConnection', args, {}, info),
    departmentsConnection: (args, info): Promise<DepartmentConnection> => super.delegate('query', 'departmentsConnection', args, {}, info),
    disciplesConnection: (args, info): Promise<DiscipleConnection> => super.delegate('query', 'disciplesConnection', args, {}, info),
    postsConnection: (args, info): Promise<PostConnection> => super.delegate('query', 'postsConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createChurch: (args, info): Promise<Church> => super.delegate('mutation', 'createChurch', args, {}, info),
    createFloor: (args, info): Promise<Floor> => super.delegate('mutation', 'createFloor', args, {}, info),
    createRoom: (args, info): Promise<Room> => super.delegate('mutation', 'createRoom', args, {}, info),
    createDepartment: (args, info): Promise<Department> => super.delegate('mutation', 'createDepartment', args, {}, info),
    createDisciple: (args, info): Promise<Disciple> => super.delegate('mutation', 'createDisciple', args, {}, info),
    createPost: (args, info): Promise<Post> => super.delegate('mutation', 'createPost', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    updateChurch: (args, info): Promise<Church | null> => super.delegate('mutation', 'updateChurch', args, {}, info),
    updateFloor: (args, info): Promise<Floor | null> => super.delegate('mutation', 'updateFloor', args, {}, info),
    updateRoom: (args, info): Promise<Room | null> => super.delegate('mutation', 'updateRoom', args, {}, info),
    updateDepartment: (args, info): Promise<Department | null> => super.delegate('mutation', 'updateDepartment', args, {}, info),
    updateDisciple: (args, info): Promise<Disciple | null> => super.delegate('mutation', 'updateDisciple', args, {}, info),
    updatePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'updatePost', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    deleteChurch: (args, info): Promise<Church | null> => super.delegate('mutation', 'deleteChurch', args, {}, info),
    deleteFloor: (args, info): Promise<Floor | null> => super.delegate('mutation', 'deleteFloor', args, {}, info),
    deleteRoom: (args, info): Promise<Room | null> => super.delegate('mutation', 'deleteRoom', args, {}, info),
    deleteDepartment: (args, info): Promise<Department | null> => super.delegate('mutation', 'deleteDepartment', args, {}, info),
    deleteDisciple: (args, info): Promise<Disciple | null> => super.delegate('mutation', 'deleteDisciple', args, {}, info),
    deletePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'deletePost', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    upsertChurch: (args, info): Promise<Church> => super.delegate('mutation', 'upsertChurch', args, {}, info),
    upsertFloor: (args, info): Promise<Floor> => super.delegate('mutation', 'upsertFloor', args, {}, info),
    upsertRoom: (args, info): Promise<Room> => super.delegate('mutation', 'upsertRoom', args, {}, info),
    upsertDepartment: (args, info): Promise<Department> => super.delegate('mutation', 'upsertDepartment', args, {}, info),
    upsertDisciple: (args, info): Promise<Disciple> => super.delegate('mutation', 'upsertDisciple', args, {}, info),
    upsertPost: (args, info): Promise<Post> => super.delegate('mutation', 'upsertPost', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    updateManyChurches: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyChurches', args, {}, info),
    updateManyFloors: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyFloors', args, {}, info),
    updateManyRooms: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyRooms', args, {}, info),
    updateManyDepartments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyDepartments', args, {}, info),
    updateManyDisciples: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyDisciples', args, {}, info),
    updateManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPosts', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    deleteManyChurches: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyChurches', args, {}, info),
    deleteManyFloors: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyFloors', args, {}, info),
    deleteManyRooms: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyRooms', args, {}, info),
    deleteManyDepartments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyDepartments', args, {}, info),
    deleteManyDisciples: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyDisciples', args, {}, info),
    deleteManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPosts', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info)
  }

  subscription: Subscription = {
    church: (args, infoOrQuery): Promise<AsyncIterator<ChurchSubscriptionPayload>> => super.delegateSubscription('church', args, {}, infoOrQuery),
    floor: (args, infoOrQuery): Promise<AsyncIterator<FloorSubscriptionPayload>> => super.delegateSubscription('floor', args, {}, infoOrQuery),
    room: (args, infoOrQuery): Promise<AsyncIterator<RoomSubscriptionPayload>> => super.delegateSubscription('room', args, {}, infoOrQuery),
    department: (args, infoOrQuery): Promise<AsyncIterator<DepartmentSubscriptionPayload>> => super.delegateSubscription('department', args, {}, infoOrQuery),
    disciple: (args, infoOrQuery): Promise<AsyncIterator<DiscipleSubscriptionPayload>> => super.delegateSubscription('disciple', args, {}, infoOrQuery),
    post: (args, infoOrQuery): Promise<AsyncIterator<PostSubscriptionPayload>> => super.delegateSubscription('post', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery)
  }
}